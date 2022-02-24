import { Component, OnInit } from '@angular/core';
import { FriendStateService } from '../../../services/friendState.service';
import { Friend } from '../../../shared/models/shared-models';

@Component({
  selector: 'app-ac-friend-details',
  templateUrl: './ac-friend-details.component.html',
  styleUrls: ['./ac-friend-details.component.scss']
})
export class AcFriendDetailsComponent implements OnInit {
  friend: Friend;
  friendPicSrc: string;
  constructor(private friendStateService: FriendStateService) { }

  ngOnInit(): void {
    this.friendStateService.getSelectedFriend$().subscribe(
      (response) => {
        this.friend = response;
        this.friendPicSrc = `assets/${this.friend.pic}`

      },
      (error) => console.log("error getting selectedFriend")
    )
  }

}
