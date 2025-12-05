import { Injectable, signal, WritableSignal } from '@angular/core';
import { Upgrade } from './upgrade';
import { HardwareUpgrade } from './hardwareUpgrade';
import { Software } from './software';

@Injectable({ providedIn: 'root' })
export class LogiqueJeu {
  money = signal(1000);
  private gainPerSecond = signal(0);

  private _hardwareUpgrade = signal<HardwareUpgrade[]>([]);
  private _openSourceUpgrades = signal<Upgrade[]>([]);
  private _nirdUpgrades = signal<Upgrade[]>([]);

  constructor() {
    this.initUpgrades();
    queueMicrotask(() => this.startGameLoop());
  }

  private initUpgrades() {
    // --- Upgrades logiciels Open Source ---
    this._openSourceUpgrades.set([
      new Software("Wicrosoft Office", 20, 1.05, 1, false, "Freedom Office"),
      new Software("Goggle Zinc", 100, 1.1, 3, false, "Icedog"),
      new Software("Adopt Fotoshoot", 500, 1.25, 10, false, "GIMS"),
      new Software("Wicrosoft Video", 2500, 2, 25, false, "VLC"),
      new Software("Glettter", 10000, 2.5, 75, false, "SunnyBunny")
    ]);

    // --- Upgrades NIRD ---
    this._nirdUpgrades.set([
      new Upgrade('George', 500, 1.2, 5, true),
      new Upgrade('Claude', 700, 1.25, 6, true),
      new Upgrade('Elizabeth', 900, 1.3, 8, true),
      new Upgrade('Roger', 600, 1.2, 5, true),
      new Upgrade('Nina', 800, 1.2, 6, true)
    ]);

    // --- Upgrades hardware ---
    const screenSaver = new Upgrade("Économiseur d'écran", 200, -1, 0.75, true);
    const lowBrightness = new Upgrade("Basse Luminosité", 100, -1, 0.05, true);
    const screen = new HardwareUpgrade('Écran', -2);
    screen.addUpgrade(screenSaver);
    screen.addUpgrade(lowBrightness);

    const surgeProtector = new Upgrade("Protection Surtension", 350, -1, 2, true);
    const power = new HardwareUpgrade('Alimentation', -1);
    power.addUpgrade(surgeProtector);

    const thermalPaste = new Upgrade("Pâte Thermique", 150, -1, 1.5, true);
    const cpuGovernor = new Upgrade("Gouverneur d'Économie d'Énergie", 400, -1, 1.5, true);
    const CPU = new HardwareUpgrade('Processeur', -5);
    CPU.addUpgrade(thermalPaste);
    CPU.addUpgrade(cpuGovernor);

    const driverOptimization = new Upgrade("Mise à jour des drivers", 600, -1, 1, true);
    const GPU = new HardwareUpgrade('Carte Graphique', -1.5);
    GPU.addUpgrade(driverOptimization);

    const diskDefrag = new Upgrade("Défragmentation Régulière", 150, -1, 1, true);
    const trimSupport = new Upgrade("Support TRIM (SSD)", 750, -1, 0.6, true);
    const HDD = new HardwareUpgrade('Disque Dur', -2);
    HDD.addUpgrade(diskDefrag);
    HDD.addUpgrade(trimSupport);

    // --- Injecter tous les hardware dans le signal ---
    this._hardwareUpgrade.set([screen, power, CPU, GPU, HDD]);
  }

  // --- getters publics ---
  get hardwareUpgrade(): WritableSignal<HardwareUpgrade[]> {
    return this._hardwareUpgrade;
  }
  get openSourceUpgrades(): WritableSignal<Upgrade[]> {
    return this._openSourceUpgrades;
  }
  get nirdUpgrades(): WritableSignal<Upgrade[]> {
    return this._nirdUpgrades;
  }
  get getmoney() { return this.money; }

  // --- méthodes ---
  buy(upgrade: Upgrade, quantity: number) {
    const moneyValue = this.money();
    const success = upgrade.buy(moneyValue, quantity);
    if (success) this.money.set(moneyValue - upgrade.getGroupPrice(quantity));
    else alert('Pas assez d’argent !');
  }

  // Réparer hardware et mettre à jour le signal
  repairHardware(hardware: HardwareUpgrade) {
    hardware.repair();
    this._hardwareUpgrade.set([...this._hardwareUpgrade()]);
  }

  private startGameLoop() {
    setInterval(() => {
      this.updateGainPerSecond();
      this.applyPassiveIncome();
      this.applyHardwareDecay();
    }, 1000);
  }

  private applyHardwareDecay() {
    for (const hardware of this._hardwareUpgrade()) {
      hardware.reduce();
    }
    this._hardwareUpgrade.set([...this._hardwareUpgrade()]);
  }

  private updateGainPerSecond() {
    let gain = 0;
    for (const u of this._nirdUpgrades()) gain += u.level * u.bonus;
    this.gainPerSecond.set(gain);
  }

  private applyPassiveIncome() {
    this.money.update(m => m + this.gainPerSecond());
  }

  clickOnScreen() {
    this.money.update(m => m + this.getActiveGain() + 1);
  }

  private getActiveGain() {
    let gain = 0;
    for (const u of this._openSourceUpgrades()) gain += u.level * u.bonus;
    return gain;
  }
}
