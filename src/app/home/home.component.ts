import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public javaSkript: boolean = true;
  public angular: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  workFilter(x: String) {
    if (x == 'angular') {
      this.angular = true;
      this.javaSkript = false;
    }
    if (x == 'javaSkript') {
      this.angular = false;
      this.javaSkript = true;
    }
    if (x == 'all') {
      this.angular = true;
      this.javaSkript = true;
    }
  }
}
