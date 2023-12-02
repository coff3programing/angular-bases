//! Js Imports
import { NgModule } from '@angular/core';

//! Import Modules
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//! Library
import { CounterModule } from './counter/counter.module';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

//! Code
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CounterModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
