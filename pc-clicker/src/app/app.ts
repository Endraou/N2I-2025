import { Component, signal } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { LogiqueJeu } from './logique-jeu/logique-jeu';
import {LogiqueJeuService} from './logique-jeu/logique-jeu-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pc-clicker');
  constructor(private logiqueService: LogiqueJeuService) {
    console.log("Le jeu est initialisé !");
  }
}
