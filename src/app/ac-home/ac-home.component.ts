import { Component, OnInit } from '@angular/core';
import { FriendStateService } from '../services/friendState.service';
import { Friend, Category, Color, UserLoginDialogData } from '../shared/models/shared-models';
import { UserLoginDialogComponent } from '../shared/components/user-login-dialog/user-login-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-ac-home',
  templateUrl: './ac-home.component.html',
  styleUrls: ['./ac-home.component.scss']
})
export class AcHomeComponent implements OnInit {
  constructor(
    private dialogSrv: DialogService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const userHasSignedOn = this.dialogSrv.getUserHasSignedOn();
    if (!userHasSignedOn)
      this.dialogSrv.openDialog();
    this.dialogSrv.setUserSignOn(true)
  }

}
