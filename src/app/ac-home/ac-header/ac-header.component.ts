import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ac-header',
  templateUrl: './ac-header.component.html',
  styleUrls: ['./ac-header.component.scss']
})
export class AcHeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
