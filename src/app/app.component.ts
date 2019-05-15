import { Component } from '@angular/core';

@Component({
    selector: 'main-app',
    template:  `<h1>
    Altarix client-side developer exam
  </h1>
  <router-outlet></router-outlet>
  <router-outlet name="popup"></router-outlet>`
})
export class AppComponent {
    constructor() {
      }
}