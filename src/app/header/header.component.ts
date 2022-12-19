import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public mmActive = false;

  constructor(public router: Router) {}

  openCloseMobileSide() {
    if (this.mmActive) {
      this.mmActive = false;
    } else {
      this.mmActive = true;
    }
  }

  closeMobileMenu() {
    if (this.mmActive) {
      this.mmActive = false;
    }
  }
}
