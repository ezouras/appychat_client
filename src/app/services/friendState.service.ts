import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Friend } from '../shared/models/shared-models';
import { appyChatFriends } from '../shared/mock_db/people';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class FriendStateService {
  private chatFriends = appyChatFriends.slice();
  private selectedFriendSubj: BehaviorSubject<Friend>;
  selectedFriend$;
  private filteredFriends: string[];
  private currentUserSubj: BehaviorSubject<Friend | null>;
  currentUser$

  constructor() {
    this.chatFriends[0].isSelected = true;
    this.selectedFriendSubj = new BehaviorSubject<Friend>(this.chatFriends[0]);
    this.selectedFriend$ = this.selectedFriendSubj.asObservable();
    this.currentUserSubj = new BehaviorSubject<Friend | null>(null);
    this.currentUser$ = this.currentUserSubj.asObservable();
  }

  getSelectedFriend$(): Observable<Friend> {
    return this.selectedFriend$;
  }
  getSelectedFriendValue(): Friend {
    return this.selectedFriendSubj.value;
  }

  getCurrentUserValue(): Friend | null {
    return this.currentUserSubj.value;
  }
  getcurrentUser$() {
    return this.currentUserSubj;
  }

  setCurrentUser(user: Friend | null) {
    this.currentUserSubj.next(user);
  }


  setSelectedFriend(friend: Friend) {
    //unselect current friend
    this.selectedFriendSubj.value.isSelected = false;
    //set new friend
    this.selectedFriendSubj.next(friend)
    this.selectedFriendSubj.value.isSelected = true;
  }


  getFriends(): Friend[] {
    return this.chatFriends;
  }

  getFilteredFriends(searchStr: string): Friend[] {
    let filteredFriends: Friend[] = [];
    this.chatFriends.forEach((friend: Friend, indx, friendArr) => {
      for (const friendKey in friend) {
        const value = friend[friendKey as keyof Friend]
        if (typeof value === 'string') {
          if (value.toLowerCase().includes(searchStr.toLowerCase())) {
            if (!_.includes(filteredFriends, friend)) {
              filteredFriends.push(friend);
            }
          }
        }
      }
    })
    return filteredFriends
  }

}
