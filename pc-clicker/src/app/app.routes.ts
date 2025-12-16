import { Routes } from '@angular/router';
import {Homepage} from './homepage/homepage';
import {BinaryHex} from './binary-hex/binary-hex';

export const routes: Routes = [
  {path : '', component: Homepage},
  {path : 'enignme1', component : BinaryHex}
];
