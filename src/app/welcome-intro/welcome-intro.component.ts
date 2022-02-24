import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, state, transition, trigger } from '@angular/animations';
import { timeout, take } from 'rxjs/operators';
import { interval } from 'rxjs'

@Component({
  selector: 'app-welcome-intro',
  templateUrl: './welcome-intro.component.html',
  styleUrls: ['./welcome-intro.component.scss'],
  animations: [
    trigger('expand', [
      transition(':enter', [
        //style({ transform: 'scale(100%)', background: 'purple', color: "white" }),
        animate('1.2s', style({ transform: 'scale(800%)', background: 'white', color: '#001CFF' })),
      ])
    ])]
})

export class WelcomeIntroComponent implements OnInit {
  /*
*/
  constructor(private router: Router) { }

  ngOnInit(): void {
    interval(1000).pipe(
      take(1)).subscribe((i: any) => {
        console.log("routing to home");
        this.router.navigate(['/ACHome'])
      })

  }
}
