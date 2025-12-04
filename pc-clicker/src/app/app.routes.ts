import { Routes } from '@angular/router';
import { Clicker } from './clicker/clicker';
import {Homepage} from './homepage/homepage';

export const routes: Routes = [
  {path: 'clicker', component: Clicker},
  {path : '', component: Homepage},
];
