import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  //loadSkills() {
  //  this.skills.forEach((s) => {
  //    document.getElementById('skill-box').innerHTML = '';
  //    document.getElementById('skill-box').innerHTML = `
  //    <div class="skill-description">
  //      Angular
  //      <div class="skill-icon">
  //        <img src="../../assets/img/icons/angular.png" alt="" />
  //      </div>
  //    `;
  //  });
  //}
  constructor() {}

  ngOnInit(): void {
    //this.loadSkills();
  }
}
