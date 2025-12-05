import {Upgrade} from './upgrade';

export class HardwareUpgrade {
  set hp(value: number) {
    this._hp = value;
  }
  get hp(): number {
    return this._hp;
  }

  get name(): string {
    return this._name;
  }
  private _hp : number;
  private upgrade : Upgrade[];
  constructor(private _name:string, private decay:number) {
    this._hp = 100;
    this.upgrade =  [];
  }

  reduce() {
    this._hp *= 1-this.decay;
  }

  repair() {
    this._hp = 100;
  }

  addUpgrade(upgrade : Upgrade) {
    this.upgrade.push(upgrade);
  }
}
