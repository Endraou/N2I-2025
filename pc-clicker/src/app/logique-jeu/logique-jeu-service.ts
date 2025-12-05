import { Injectable } from '@angular/core';
import { LogiqueJeu } from './logique-jeu';

@Injectable({
  providedIn: 'root'
})
export class LogiqueJeuService {
  logique = new LogiqueJeu();

  constructor() {
    console.log("LogiqueJeu instanciée !");
  }
}
