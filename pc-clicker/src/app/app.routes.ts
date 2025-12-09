import { Routes } from '@angular/router';
import {Homepage} from './homepage/homepage';
import {EnglishNicoComponent} from './components/enigmEnglishNico/enigmEnglishNico';

export const routes: Routes = [
  {path : '', component: Homepage},
  {path:'enigmEnglishNico', component: EnglishNicoComponent}
];
