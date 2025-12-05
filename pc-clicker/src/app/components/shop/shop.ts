// src/app/shop-popup/shop-popup.component.ts
import {Component, EventEmitter, Output, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Upgrade} from '../../logique-jeu/upgrade';
import {GameScreen} from '../screen/screen';
import {LogiqueJeu} from '../../logique-jeu/logique-jeu';
import {LogiqueJeuService} from '../../logique-jeu/logique-jeu-service';

@Component({
  selector: 'app-shop-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss']
})
export class ShopPopupComponent {

  // Argent disponible
  protected money ;

  @Output() close = new EventEmitter<void>();

  // Catégories
  openSourceUpgrades: Upgrade[] = [];
  nirdUpgrades: Upgrade[] = [];

  constructor(private logiqueJeu : LogiqueJeuService) {
    this.money = logiqueJeu.logique.money;
    // Initialisation des objets Open Source
    this.openSourceUpgrades = logiqueJeu.logique.openSourceUpgrades();

    // Initialisation des objets NIRD Assistant
    this.nirdUpgrades = logiqueJeu.logique.nirdUpgrades();
  }

  // Acheter un objet
  buy(upgrade: Upgrade, quantity: number) {
    this.logiqueJeu.logique.buy(upgrade,quantity);
  }

  closeShop() {
    this.close.emit();
  }

}
