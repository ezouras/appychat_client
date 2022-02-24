import { Component, Input, OnInit } from '@angular/core';
import { Category, Friend } from '../../models/shared-models'
import { Router } from '@angular/router';
@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() friend: Friend;
  myDate = new Date();
  friendPicSrc: string;
  constructor() { }

  ngOnInit(): void {

    this.friendPicSrc = `assets/${this.friend.pic}`
  }

}
