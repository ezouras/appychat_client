import { Component, OnInit } from '@angular/core';
import { FriendStateService } from '../../services/friendState.service';
import { Friend, UserLoginDialogData } from '../../shared/models/shared-models';
import { DialogService } from '../../services/dialog.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ac-settings',
  templateUrl: './ac-settings.component.html',
  styleUrls: ['./ac-settings.component.scss']
})
export class AcSettingsComponent implements OnInit {
  userSet = false;
  user: Friend;

  constructor(private friendStateSrv: FriendStateService, private dialogSrv: DialogService) { }

  ngOnInit(): void {
    this.friendStateSrv.getcurrentUser$().subscribe(
      res => this.userSet = res ? this.setUser(res) : false
    )
  }

  setUser(userData: Friend) {
    this.user = userData;
    console.log("user is ", this.user)
    return true;
  }



  signIn() {
    this.dialogSrv.openDialog();
  }

}
