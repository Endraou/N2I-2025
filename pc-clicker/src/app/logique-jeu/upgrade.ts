export class Upgrade {

  private _name : string;
  private _actualPrice : number;
  private _multi : number;
  private _bonus : number;
  private _isPassive : boolean;
  private _level : number;

  constructor(_name:string, basePrice : number, multi : number, _bonus : number, _isPassive : boolean) {
    this._level = 0;
    this._actualPrice = basePrice;
    this._multi = multi;
    this._bonus = _bonus;
    this._isPassive = _isPassive;
    this._name = _name;
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


  get isPassive(): boolean {
    return this._isPassive;
  }

  getGroupPrice(quantity: number) {
    let sum = 0;
    for (let i = 0; i < quantity; i++) {
      sum += this._actualPrice * Math.pow(this._multi, i);
    }
    return sum;
  }

  buy(actualMoney: number, quantity: number) {
    if(this._actualPrice > 0 ) {
      const totalCost = this.getGroupPrice(quantity);
      if (actualMoney >= totalCost) {
        this._level += quantity;
        this._actualPrice *= Math.pow(this._multi, quantity);
        return true;
      }
      return false;
    }
    return false;
  }

}
