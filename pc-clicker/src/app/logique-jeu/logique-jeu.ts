import {Software} from './software';
import {Upgrade} from './upgrade';
import {HardwareUpgrade} from './hardwareUpgrade';

class LogiqueJeu{
  constructor() {
    /*
  * Instanciation des upgrades logiciels
  */
    const textEditor = new Software("Wicrosoft Office", 20, 1.05, 1, false, "Freedom Office");
    const browser = new Software("goggle zinc", 100, 1.1, 3, false, "Icedog");
    const imageEditor = new Software("Adopt fotoshoot", 500, 1.25, 10, false, "GIMS");
    const videoWatcher = new Software("Wicrosoft video", 2500, 2, 25, false, "VLC" ); //éventuellement changer le nom de VLC
    const mail = new Software("Glettter", 10000, 2.5, 75, false, "SunnyBunny");

    /*
    * Instanciation des upgrades matérielles
    */
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
    const GPU = new HardwareUpgrade('Carte Graphique', 1.5);
    GPU.addUpgrade(driverOptimization);

    const diskDefrag = new Upgrade("Défragmentation Régulière", 150, -1, 1, true);
    const trimSupport = new Upgrade("Support TRIM (SSD)", 750, -1, 0.6, true);
    const HDD = new HardwareUpgrade('Disque Dur', -2);
    HDD.addUpgrade(diskDefrag);
    HDD.addUpgrade(trimSupport);
  }

}
