import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PersonCardComponent } from '../../../shared/components/person-card/person-card.component';
import { FriendStateService } from '../../../services/friendState.service';
import { Friend } from '../../../shared/models/shared-models';
import { FormBuilder } from '@angular/forms';
import { fromEvent, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
@Component({
  selector: 'app-ac-friends',
  templateUrl: './ac-friends.component.html',
  styleUrls: ['./ac-friends.component.scss']
})
export class AcFriendsComponent implements OnInit {
  //bind 'searchForm' using [formGroup] inside of form
  searchForm = this.formBuilder.group({
    searchInput: ''
  });
  friends: Friend[];

  constructor(private friendStateService: FriendStateService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.friends = this.friendStateService.getFriends();
    /*this.searchForm.valueChanges.subscribe(
      (data) => {
        console.log("input update ", data.searchInput)
        this.friends = this.friendStateService.getFilteredFriends(data.searchInput);
        console.log('filtered friends are ', this.friends)
      }
    )*/
    //using a remote server except switch map should do a "get" request that would
    //filter for you
    this.searchForm.valueChanges.pipe(
      debounceTime(200),
      map((data) => data.searchInput),
      distinctUntilChanged(),
      switchMap(string => of(this.friendStateService.getFilteredFriends(string))),
      tap(filteredUsers => this.friends = filteredUsers)
    ).subscribe();

  }


  friendSelected(friend: Friend) {
    this.friendStateService.setSelectedFriend(friend)
  }
}
