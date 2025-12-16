import { Routes } from '@angular/router';
import {Homepage} from './homepage/homepage';
import {Cipherpage} from './cipherpage/cipherpage';
import {EnglishNicoComponent} from './components/enigmEnglishNico/enigmEnglishNico';
import {BadEndPage} from './badendpage/bad-end-page.component';

export const routes: Routes = [
  {path : '', component: Homepage},
  {path : 'cipher', component: Cipherpage},
  {path:'enigmEnglishNico', component: EnglishNicoComponent},
  {path : 'endgame', component: BadEndPage}
];
