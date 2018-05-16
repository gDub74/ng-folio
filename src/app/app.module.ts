import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherComponent } from './home/weather/weather.component';
import { TeamComponent } from './home/team/team.component';
import { NavComponent } from './nav/nav.component';
import { MoviesComponent } from './home/movies/movies.component';

import { MovieService } from './services/movie.service';
import { TeamService } from './services/team.service';
import { WeatherService } from './services/weather.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TeamComponent,
    NavComponent,
    MoviesComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MovieService, TeamService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
