import { Routes } from '@angular/router';
import {Homepage} from './homepage/homepage';
import {Cipherpage} from './cipherpage/cipherpage';
import {EnglishNicoComponent} from './components/enigmEnglishNico/enigmEnglishNico';

export const routes: Routes = [
  {path : '', component: Homepage},
  {path : 'cipher', component: Cipherpage},
  {path:'enigmEnglishNico', component: EnglishNicoComponent}
];
