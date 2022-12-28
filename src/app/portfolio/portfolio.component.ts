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
      short_description: 'JavaScript-based jump and run game.',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'credential.png',
      href: 'https://el-pollo-loco.stefan-maksimek.de/',
      build_with: 'javaSkript',
      status: 'ready',
    },
    {
      title: 'Ring of fire',
      short_description: 'Angular based card game.',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'ringoffire.png',
      href: 'https://ring-of-fire.stefan-maksimek.de/',
      build_with: 'angular',
      status: 'ready',
    },
    {
      title: 'Portfolio',
      short_description: 'Personal porfolio website.',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'portfolio.jpg',
      href: '',
      build_with: 'angular',
      status: 'ready',
    },
    {
      title: 'Kanban Project Management Tool',
      short_description: 'Kanban Project Management Tool.',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'join.jpg',
      href: 'https://join.stefan-maksimek.de/',
      build_with: 'javaSkript',
      status: 'ready',
    },

    {
      title: 'Slack-Clone',
      short_description: 'Web-Messenger like Slack',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'slack_clone.jpg',
      href: 'https://slack-clone.stefan-maksimek.de/',
      build_with: 'angular',
      status: 'ready',
    },
    {
      title: 'Simple CRM',
      short_description: 'CRM system with fake-data',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'simple_crm.jpg',
      href: 'https://simple-crm.stefan-maksimek.de/',
      build_with: 'angular',
      status: 'ready',
    },
    /** 
    {
      title: 'Poker Game',
      short_description: 'No-limit Texas Hold`em Poker',
      description:
        'test Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci deserunt nesciunt veniam minima eligendi, commodi cum numquam unde neque. test',
      img: 'ace.jpg',
      href: '',
      build_with: 'angular',
      status: 'in progress',
    },
    */
  ];

  constructor() {}

  ngOnInit(): void {}
}
