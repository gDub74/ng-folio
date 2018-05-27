import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent
  },
  // {
  //   path: 'weather',
  //   component: WeatherComponent
  //   // add children routes for weather app
  // },
  // {
  //   path: 'team',
  //   component: TeamComponent
  //   // add team app children routes
  // },
  // {
  //   path: 'movies',
  //   component: MoviesComponent
  //   // add movie children
  // },
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
