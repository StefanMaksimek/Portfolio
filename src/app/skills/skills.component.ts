import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    { title: 'Angular', icon: 'angular.png' },
    { title: 'JavaSript', icon: 'javascript.png' },
    { title: 'Sass', icon: 'sass.png' },
    { title: 'Angular Material', icon: 'angular_material.png' },
    { title: 'Google Firebase', icon: 'firebase.png' },
    { title: 'Git', icon: 'git.png' },
    { title: 'Scrum', icon: 'scrum.png' },
    { title: 'Databases', icon: 'databases.png' },
    { title: 'Rest API', icon: 'rest-api.png' },
  ];

  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
