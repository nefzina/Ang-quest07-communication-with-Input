import { Skill } from "./skill.model";

export class Developer {
  constructor(
    private _lastName: string,
		private _firstName: string,
		private _age: number,
		private _gender: string,
		private _bio: string,
		private _skills: Skill[]
    ){}

		get lastName(): string {
			return this._lastName;
		}
		set lastName(name: string){
			this._lastName = name;
		}

		get firstName(): string {
			return this._firstName;
		}
		set firstName(name: string){
			this._firstName = name;
		}

		get age(): number {
			return this._age;
		}
		set age(age:number){
			this._age = age;
		}

		get gender(): string {
			return this._gender;
		}
		set gender(gender: string){
			this._gender = gender;
		}

		get bio(): string {
			return this._bio;
		}
		set bio(biography: string){
			this._bio = biography;
		}

		get skills(): Skill[] {
			return this._skills;
		}
		set skills(skillsArray: Skill[]){
			this._skills = skillsArray;
		}
		
}