import { Component, OnInit } from '@angular/core';

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
    { title: 'Git', icon: 'git.png' },
    { title: 'Scrum', icon: 'scrum.png' },
    { title: 'Design Thinking', icon: 'desing-thinking.png' },
    { title: 'Databases', icon: 'databases.png' },
    { title: 'Rest API', icon: 'rest-api.png' },
    { title: 'Test automation', icon: 'test-automatisation.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
