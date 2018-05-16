import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherComponent } from './home/weather/weather.component';
import { TeamComponent } from './home/team/team.component';
import { MoviesComponent } from './home/movies/movies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
    // add children routes for weather app
  },
  {
    path: 'team',
    component: TeamComponent
    // add team app children routes
  },
  {
    path: 'movies',
    component: MoviesComponent
    // add movie children
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
