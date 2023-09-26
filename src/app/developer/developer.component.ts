import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})

export class DeveloperComponent {
  developer: Developer;
  // developer2: Developer;


  constructor() {
    const skill1 = new Skill("Angular", "angular-logo", "https://angular.io/");
    const skill2 = new Skill("React", "react-logo", "https://react.dev/");
    const skill3 = new Skill("MySQL", "mysql-logo", "https://www.mysql.com/");


    this.developer = new Developer("Doe", "John", 28, "male", "biography 1", [skill1, skill2, skill3])
    // this.developer2 = new Developer("Doe", "Jane", 25, "female", "biography 2", [skill1, skill2])
  }
}
