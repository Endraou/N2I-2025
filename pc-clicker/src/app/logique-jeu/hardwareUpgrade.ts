import { Upgrade } from './upgrade';

export class HardwareUpgrade {
  private _hp: number;
  private upgrades: Upgrade[];

  constructor(private _name: string, private decay: number) {
    this._hp = 100;
    this.upgrades = [];
  }

  get hp(): number {
    return this._hp;
  }

  set hp(value: number) {
    this._hp = value;
  }

  get name(): string {
    return this._name;
  }

  addUpgrade(upgrade: Upgrade) {
    this.upgrades.push(upgrade);
  }

  private getEffectiveDecay(): number {
    let effectiveDecay = this.decay;
    for (const u of this.upgrades) {
      if (u.isPassive) {
        effectiveDecay -= u.bonus;
      }
    }
    if (effectiveDecay < 0) effectiveDecay = 0;
    return effectiveDecay;
  }

  reduce() {
    const decayToApply = this.getEffectiveDecay();
    this._hp *= 1 - decayToApply;
    if (this._hp < 0) this._hp = 0;
  }

  repair() {
    this._hp = 100;
  }
}
