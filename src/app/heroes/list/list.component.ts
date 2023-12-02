import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroNames: string[] = ['Spider-man', 'Ironman', 'Hulk', 'Shehulk', 'Thor'];
  deletedHeroe?: string;

  removeLastHero(): void {
    this.deletedHeroe = this.heroNames.pop();
  }
}
