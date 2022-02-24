import { Component, OnInit, Inject } from '@angular/core';
import { UserLoginDialogData, Color, Category } from '../../../shared/models/shared-models';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-login-dialog',
  templateUrl: './user-login-dialog.component.html',
  styleUrls: ['./user-login-dialog.component.scss']
})
export class UserLoginDialogComponent implements OnInit {
  colors = [
    'blue',
    'purple',
    'navy',
    'pink',
    'orange',
    'grey',
    'black',
    'red',
    'yellow'
  ]

  categories = [
    'sports',
    'reading',
    'health',
    'technology',
    'gaming'

  ]



  constructor(
    public dialogRef: MatDialogRef<UserLoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserLoginDialogData,
  ) { }

  ngOnInit(): void {

  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
