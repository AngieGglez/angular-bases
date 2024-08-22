import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number = 45;

  get capitalizeName () :string{
    return this.name.toUpperCase();
  }

  public getHeroDescription ():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero() : void {
    this.name='Rafaello';
  }

  changeAge() : void {
    this.age = 43;
  }

  resetForm():void{
    this.name = 'iroman';
    this.age =45;

    //document.querySelectorAll('h1')!.forEach(element => {
    //  element.innerHTML = '<h1>Angular</h1>';
    //});
  }
}
