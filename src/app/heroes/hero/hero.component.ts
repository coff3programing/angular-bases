import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get shortName(): string {
    return this.name.slice(-2);
  }

  changeName() {
    this.name = 'Goku';
  }
  changeAge() {
    this.age = 22;
  }

  resetform() {
    this.name = 'ironman';
    this.age = 45;
    const d = document;
    d.querySelector('h1')!.innerHTML = '<h1>From Angular</h1>';
  }
}
