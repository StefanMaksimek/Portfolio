import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public projects = [
    {
      title: 'El Pollo Loco',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'credential.png',
      href: 'https://el-pollo-loco-e9eth27of-stefanmaksimek.vercel.app/',
      status: 'ready',
    },
    {
      title: 'Portfolio',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'business_app.jpg',
      href: '',
      status: 'ready',
    },
    {
      title: 'Kanban Project Management Tool',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'laptop.jpg',
      href: 'https://gruppe-272.developerakademie.net/Gruppenarbeit-Join-/index.html',
      status: 'ready',
    },
    {
      title: 'Poker Game',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'ace.jpg',
      href: 'https://el-pollo-loco-e9eth27of-stefanmaksimek.vercel.app/',
      status: 'in progress',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
