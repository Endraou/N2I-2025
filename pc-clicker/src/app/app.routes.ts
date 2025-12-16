import { Routes } from '@angular/router';
import {Homepage} from './homepage/homepage';
import {Cipherpage} from './cipherpage/cipherpage';

export const routes: Routes = [
  {path : '', component: Homepage},
  {path : 'cipher', component: Cipherpage},
];
