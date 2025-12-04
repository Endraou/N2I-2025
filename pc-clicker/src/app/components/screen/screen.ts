import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // <--- IMPORTANT
import { ShopPopupComponent} from '../shop/shop';

@Component({
  selector: 'game-screen',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ShopPopupComponent], // <-- ajouter CommonModule
  templateUrl: './screen.html',
  styleUrls: ['./screen.scss'],
})
export class GameScreen {
  protected readonly title = signal('pc-clicker');

  protected pathScreen: string;
  protected pathMicro: string;
  showStore = signal(false);

  constructor() {
    this.pathScreen = "windows_pixel_art.png";
    this.pathMicro = "Wicrosoft Mord.png";
  }

  onScreenClick() {
    console.log("You clicked");
  }

  openStore() {
    this.showStore.set(true);
  }

  closeStore() {
    this.showStore.set(false);
  }
}
