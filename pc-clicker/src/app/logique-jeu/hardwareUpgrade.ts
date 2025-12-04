import {Upgrade} from './upgrade';

export abstract class HardwareUpgrade {
  private hp : number;
  private upgrade : Upgrade[];
  constructor(private name:string, private decay:number) {
    this.hp = 100;
    this.upgrade =  [];
  }

  reduce() {
    this.hp *= 1-this.decay;
  }

  repair() {
    this.hp = 100;
  }

  addUpgrade(upgrade : Upgrade) {
    this.upgrade.push(upgrade);
  }
}
