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
    const skill1 = new Skill("Angular", "../../assets/Angular_full_color_logo.svg.png", "https://angular.io/");
    const skill2 = new Skill("React", "../../assets/React-icon.svg.png", "https://react.dev/");
    const skill3 = new Skill("MySQL", "../../assets/mysql.png", "https://www.mysql.com/");


    this.developer = new Developer("Doe", "John", 28, "male", "biography 1", [skill1, skill2, skill3])
    // this.developer2 = new Developer("Doe", "Jane", 25, "female", "biography 2", [skill1, skill2])
  }
}
