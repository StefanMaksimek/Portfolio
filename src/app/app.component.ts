import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {}

  onActive() {
    window.scroll(0, 0);
    //(activate)="onActive()"
  }
}
