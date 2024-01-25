import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cf-not-found',
  template: `

  <p>
  not-found works!
  </p>

  <a routerLink="/">Goo home routerLink</a>
  <br>
  <button (click)="goHome()">goHome Metodo</button>
 
  `,
  styles: [
  ]
})
export class NotFoundComponent {
  constructor(private _router: Router) {

  }

  goHome() {
    console.log("entra");

    this._router.navigate(["/"]);
  }



}
