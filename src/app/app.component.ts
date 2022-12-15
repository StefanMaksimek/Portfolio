import { Component } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public mmActive = false;

  public javaSkript: string = 'javaSkript';
  public angular: string = 'angular';

  portfolio = new PortfolioComponent();
  constructor() {}

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

  scrollToElement(section: any): void {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  workFilter(x: String) {
    if (x == 'angular') {
      this.angular = 'angular';
      this.javaSkript = '';
    }
    if (x == 'javaSkript') {
      this.angular = '';
      this.javaSkript = 'javaSkript';
    }
    if (x == 'all') {
      this.angular = 'angular';
      this.javaSkript = 'javaSkript';
    }
  }
}
