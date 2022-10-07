import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  mmActive = false;
  constructor() {}

  ngOnInit(): void {}

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
