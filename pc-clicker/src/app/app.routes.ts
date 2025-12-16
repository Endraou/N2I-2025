import { Routes } from '@angular/router';
import {EnglishNicoComponent} from './components/enigmEnglishNico/enigmEnglishNico';
import { Homepage} from './homepage/homepage';
import { Conditional} from './components/conditional/conditional';
import {Cipherpage} from './cipherpage/cipherpage';
import {BinaryHex} from './binary-hex/binary-hex';
import {BadEndPage} from './badendpage/bad-end-page.component';
import {GoodEndingPage} from './goodendingpage/good-ending-page';

export const routes: Routes = [
  {path : '', component: Homepage},
  {path:'enigmEnglishNico', component: EnglishNicoComponent},
  {path : 'conditional', component: Conditional},
  {path : 'enignme1', component : BinaryHex},
  {path : 'cipher', component: Cipherpage},
  {path : 'endgame', component: BadEndPage},
  {path : 'goodend', component: GoodEndingPage},
];
