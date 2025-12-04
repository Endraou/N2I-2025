export abstract  class Upgrade {
  private _level : number;
  private _actualPrice : number;

  constructor(private _name:string, private basePrice : number, private multi : number, private _bonus : number) {
    this._level = 0;
    this._actualPrice = basePrice;
  }

  get level(): number {
    return this._level;
  }

  get actualPrice(): number {
    return this._actualPrice;
  }

  get name(): string {
    return this._name;
  }

  get bonus(): number {
    return this._bonus;
  }

  getGroupPrice(quantity: number) {
    let sum = 0;
    for (let i = 0; i < quantity; i++) {
      sum += this._actualPrice * Math.pow(this.multi, i);
    }
    return sum;
  }

  buy(actualMoney: number, quantity: number) {
    const totalCost = this.getGroupPrice(quantity);
    if (actualMoney >= totalCost) {
      this._level += quantity;
      this._actualPrice *= Math.pow(this.multi, quantity);
      return true;
    }
    return false;
  }

}
