import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public javaSkript: string = 'javaSkript';
  public angular: string = 'angular';

  @ViewChild('about') about!: any;

  portfolio = new PortfolioComponent();
  constructor(private scroller: ViewportScroller, public router: Router) {}

  ngOnInit(): void {}

  scrollToElement(section: any): void {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  goDown1(section: string) {
    this.scroller.scrollToAnchor(section);
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
