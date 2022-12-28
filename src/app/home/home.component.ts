import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import {
  trigger,
  style,
  animate,
  transition,
  stagger,
  query,
} from '@angular/animations';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInName', [
      transition(':enter', [
        style({
          opacity: '0',
          width: '0',
        }),
        animate(
          '1500ms',
          style({
            opacity: '1',
            width: '189px',
          })
        ),
      ]),
    ]),

    trigger('fadeInLetter', [
      transition(':enter', [
        style({
          transform: 'translate(-100vw, 0 ) rotate(-1080deg)',
        }),
        animate(
          '1500ms 500ms',
          style({
            transform: 'translate(0, 0)',
          })
        ),
      ]),
    ]),

    trigger('written', [
      transition(':enter', [
        style({
          opacity: '0',
          width: '0',
        }),
        animate(
          '1000ms 2000ms',
          style({
            opacity: '1',
            width: '110px',
          })
        ),
      ]),
    ]),

    trigger('btnRotate', [
      transition(':enter', [
        style({
          opacity: '0',
          filter: 'blur(10px)',
        }),
        animate(
          '500ms 3000ms',
          style({
            opacity: '1',
            filter: 'blur(0)',
          })
        ),
      ]),
    ]),

    trigger('arrowRotate', [
      transition(':enter', [
        style({
          opacity: '0',
          filter: 'blur(10px)',
          transform: 'rotate(360deg)',
        }),
        animate(
          '500ms 3500ms',
          style({
            opacity: '1',
            filter: 'blur(0)',
            transform: 'rotate(0deg)',
          })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  public javaSkript: string = 'javaSkript';
  public angular: string = 'angular';

  @ViewChild('about') about!: any;

  portfolio = new PortfolioComponent();
  constructor(private scroller: ViewportScroller, public router: Router) {}

  ngOnInit(): void {
    Aos.init();
  }

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
