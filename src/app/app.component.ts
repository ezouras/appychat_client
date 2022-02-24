import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appychat';

  constructor(private router: Router) { }
  onActivate() {
    window.scroll(0, 0);


  }
  onInit() {
    this.router.navigate(['/Hello']);
  }
}
