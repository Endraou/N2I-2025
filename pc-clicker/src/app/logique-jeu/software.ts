import {Upgrade} from './upgrade';

export class Software extends Upgrade{
  private _upgradedName: string;
  private _downgraded: boolean
  constructor(_name:string, basePrice : number,multi : number,_bonus : number, _isPassive : boolean,_upgradedName: string) {
    super(_name, basePrice, multi , _bonus,  _isPassive);
    this._upgradedName = _upgradedName;
    this._downgraded = false;
  }

  get upgradedName(): String {
    return this._upgradedName;
  }

  get isDowngraded(): boolean {
    return this._downgraded;
  }

  downgrade(){
    this._downgraded = true;
  }

  rebuy(actualMoney: number) {
    if (actualMoney >= this.actualPrice*.3 && this._downgraded) {
      this._downgraded = false;
      return true;
    }
    return false;
  }
}
