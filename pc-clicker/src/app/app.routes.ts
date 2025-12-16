import { Routes } from '@angular/router';
import { Homepage} from './homepage/homepage';
import { Conditional} from './components/conditional/conditional';

export const routes: Routes = [
  {path : '', component: Homepage},
  {path : 'conditional', component: Conditional}
];
