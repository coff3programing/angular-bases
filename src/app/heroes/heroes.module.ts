import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent, ListComponent } from './index';

@NgModule({
  exports: [HeroComponent, ListComponent],
  declarations: [HeroComponent, ListComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
