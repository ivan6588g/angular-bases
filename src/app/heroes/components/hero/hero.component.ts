import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name : string = "ironman";
  public age: number = 45;
  public showChangeName = true;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getheroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'spiderman';

    this.showChangeName = false;
  }

  changeAge():void {
    this.age = 23;
  }
  reseyForm():void {
    this.name = 'ironman';
    this.age = 45;
  }


}
