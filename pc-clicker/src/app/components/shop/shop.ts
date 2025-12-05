// src/app/shop-popup/shop-popup.component.ts
import {Component, EventEmitter, Output, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Upgrade } from '../../upgrade';
import {GameScreen} from '../screen/screen';

@Component({
  selector: 'app-shop-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss']
})
export class ShopPopupComponent {

  // Argent disponible
  money = signal(1000);

  @Output() close = new EventEmitter<void>();

  // Catégories
  openSourceUpgrades = signal<Upgrade[]>([]);
  nirdUpgrades = signal<Upgrade[]>([]);

  constructor() {
    // Initialisation des objets Open Source
    this.openSourceUpgrades.set([
      new Upgrade('LibreOffice', 100, 1.1, 1, true),
      new Upgrade('Firefox', 150, 1.15, 2, true),
      new Upgrade('GIMP', 120, 1.12, 1, true),
      new Upgrade('VLC', 80, 1.1, 1, true),
      new Upgrade('Thunderbird', 90, 1.1, 1, true)
    ]);

    // Initialisation des objets NIRD Assistant
    this.nirdUpgrades.set([
      new Upgrade('George', 500, 1.2, 5, true),
      new Upgrade('Claude', 700, 1.25, 6, true),
      new Upgrade('Elizabeth', 900, 1.3, 8, true),
      new Upgrade('Roger', 600, 1.2, 5, true),
      new Upgrade('Nina', 800, 1.2, 6, true)
    ]);
  }

  // Acheter un objet
  buy(upgrade: Upgrade, quantity: number) {
    const moneyValue = this.money();
    const success = upgrade.buy(moneyValue, quantity);
    if (success) {
      this.money.set(moneyValue - upgrade.getGroupPrice(quantity));
    } else {
      alert('Pas assez d’argent !');
    }
  }

  closeShop() {
    this.close.emit();
  }

}
