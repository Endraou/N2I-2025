import {Software} from './software';
import {Upgrade} from './upgrade';
import {HardwareUpgrade} from './hardwareUpgrade';
import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogiqueJeu{
  money = signal(1000);
  private gainPerSecond = signal(0);

  private _openSourceUpgrades = signal<Upgrade[]>([]);
  private _nirdUpgrades = signal<Upgrade[]>([]);
  private _hardwareUpgrade = signal<HardwareUpgrade[]>([])
  constructor() {
    this.initUpgrades();
    queueMicrotask(() => this.startGameLoop());
  }

  private initUpgrades() {
    /*
 * Instanciation des upgrades logiciels
 */
    this._openSourceUpgrades.set([
        new Software("Wicrosoft Office", 20, 1.05, 1, false, "Freedom Office"),
        new Software("goggle zinc", 100, 1.1, 3, false, "Icedog"),
        new Software("Adopt fotoshoot", 500, 1.25, 10, false, "GIMS"),
        new Software("Wicrosoft video", 2500, 2, 25, false, "VLC" ), //éventuellement changer le nom de VLC
        new Software("Glettter", 10000, 2.5, 75, false, "SunnyBunny")
      ]
    );

    this._nirdUpgrades.set([
      new Upgrade('George', 500, 1.2, 5, true),
      new Upgrade('Claude', 700, 1.25, 6, true),
      new Upgrade('Elizabeth', 900, 1.3, 8, true),
      new Upgrade('Roger', 600, 1.2, 5, true),
      new Upgrade('Nina', 800, 1.2, 6, true)
    ]);


    /*
    * Instanciation des upgrades matérielles
    */
    const screenSaver = new Upgrade("Économiseur d'écran", 200, -1, 0.75, true);
    const lowBrightness = new Upgrade("Basse Luminosité", 100, -1, 0.05, true);
    const screen = new HardwareUpgrade('Écran', 0.02);
    screen.addUpgrade(screenSaver);
    screen.addUpgrade(lowBrightness);

    const surgeProtector = new Upgrade("Protection Surtension", 350, -1, 2, true);
    const power = new HardwareUpgrade('Alimentation', 0.03);
    power.addUpgrade(surgeProtector);

    const thermalPaste = new Upgrade("Pâte Thermique", 150, -1, 1.5, true);
    const cpuGovernor = new Upgrade("Gouverneur d'Économie d'Énergie", 400, -1, 1.5, true);
    const CPU = new HardwareUpgrade('Processeur', 0.01);
    CPU.addUpgrade(thermalPaste);
    CPU.addUpgrade(cpuGovernor);

    const driverOptimization = new Upgrade("Mise à jour des drivers", 600, -1, 1, true);
    const GPU = new HardwareUpgrade('Carte Graphique', 0.04);
    GPU.addUpgrade(driverOptimization);

    const diskDefrag = new Upgrade("Défragmentation Régulière", 150, -1, 1, true);
    const trimSupport = new Upgrade("Support TRIM (SSD)", 750, -1, 0.6, true);
    const HDD = new HardwareUpgrade('Disque Dur', 0.05);
    HDD.addUpgrade(diskDefrag);
    HDD.addUpgrade(trimSupport);

    this._hardwareUpgrade.set([
      screen,power,CPU,GPU, HDD
    ]);
  }

  private startGameLoop() {
    setInterval(() => {
      this.updateGainPerSecond();
      this.applyPassiveIncome();
      this.applyHardwareDecay();
    }, 1000);
  }

  get openSourceUpgrades(): WritableSignal<Upgrade[]> {
    return this._openSourceUpgrades;
  }

  get getmoney() {
    return this.money;
  }

  get nirdUpgrades(): WritableSignal<Upgrade[]> {
    return this._nirdUpgrades;
  }

  get hardwareUpgrade(): WritableSignal<HardwareUpgrade[]> {
    return this._hardwareUpgrade;
  }


  buy(upgrade: Upgrade, quantity: number) {
    const moneyValue = this.money();
    const success = upgrade.buy(moneyValue, quantity);
    if (success == -1) {
      alert('Pas assez d’argent !');
    } else {
      this.money.set(moneyValue - success);
    }
  }

  private updateGainPerSecond() {

    let gain = 0;

    // Assistants NIRD
    for (const u of this._nirdUpgrades()) {
      gain += u.level * u.bonus;
    }

    this.gainPerSecond.set(gain);
  }

  private getActiveGain() {
    let gain = 0;
    // Upgrades logiciels
    for (const u of this._openSourceUpgrades()) {
      gain += u.level * u.bonus;
    }
    return gain;
  }

  private applyPassiveIncome() {
    this.money.update(m => m + this.gainPerSecond());
  }

  private applyHardwareDecay() {
    const list = this._hardwareUpgrade();

    for (const hardware of list) {
      hardware.reduce();   // <-- on utilise la méthode de l’objet
      if (hardware.hp < 0) hardware.hp = 0;
      if (hardware.hp > 100) hardware.hp = 100;
    }

    // On réinjecte la liste pour déclencher les signaux
    this._hardwareUpgrade.set([...list]);
  }

  clickOnScreen() {
    this.money.update(m=>m+this.getActiveGain() + 1);
  }
}
