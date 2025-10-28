import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home';
import { SavedCitiesComponent } from './component/saved-cities/saved-cities';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'saved', component: SavedCitiesComponent },
];
