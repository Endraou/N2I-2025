import {Component, signal, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // <--- IMPORTANT
import { ShopPopupComponent} from '../shop/shop';
import {LogiqueJeuService} from '../../logique-jeu/logique-jeu-service';
import {HardwareStatusComponent} from '../hardware/hardware';

@Component({
  selector: 'game-screen',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ShopPopupComponent, HardwareStatusComponent], // <-- ajouter CommonModule
  templateUrl: './screen.html',
  styleUrls: ['./screen.scss'],
})
export class GameScreen {
  protected readonly title = signal('pc-clicker');

  protected pathScreen: string;
  protected pathMicro: string;
  showStore = signal(false);

  protected money;

  constructor(private logiqueJeu : LogiqueJeuService) {
    this.money = this.logiqueJeu.logique.money;
    this.pathScreen = "windows_pixel_art.png";
    this.pathMicro = "Wicrosoft Mord.png";
  }

  onScreenClick() {
    this.logiqueJeu.logique.clickOnScreen();
  }

  openStore() {
    this.showStore.set(true);
  }

  closeStore() {

    this.showStore.set(false);
  }

}
