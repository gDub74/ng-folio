import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { TeamManagerModule } from './team-manager/team-manager.module';
import { MoviesModule } from './movies/movies.module';

import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, TeamManagerModule, MoviesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
