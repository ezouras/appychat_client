import { Injectable } from '@angular/core';
import { FriendStateService } from '../services/friendState.service';
import { Friend, Category, Color, UserLoginDialogData } from '../shared/models/shared-models';
import { UserLoginDialogComponent } from '../shared/components/user-login-dialog/user-login-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class DialogService {
  private triedToSignIn$: BehaviorSubject<boolean>;
  dilogueResponsedata: UserLoginDialogData = {
    first_name: '', last_name: '', favorite_color: '', category: ''
  };

  constructor(private friendStateSrv: FriendStateService, public dialog: MatDialog) {
    this.triedToSignIn$ = new BehaviorSubject<boolean>(false);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserLoginDialogComponent, {
      width: '250px',
      data: this.dilogueResponsedata,
    });

    dialogRef.afterClosed().subscribe(dialogData => {
      const user: Friend | null = dialogData ? this.getUser(dialogData) : null;
      this.friendStateSrv.setCurrentUser(user);
      this.setUserSignOn(true);
    });
  }

  getUser(response: UserLoginDialogData) {
    const user: Friend = { ...response, isSelected: false, pic: '' }
    user.category = user.category.length < 1 ? Category.None : user.category;
    user.favorite_color = user.favorite_color.length < 1 ? Color.None : user.favorite_color;
    user.first_name = user.first_name.length < 1 ? "Anonomous" : user.first_name;
    return user;
  }

  getUserHasSignedOn() {
    return this.triedToSignIn$.value;
  }
  setUserSignOn(hasSignedOn: boolean) {
    this.triedToSignIn$.next(hasSignedOn);
  }

}
