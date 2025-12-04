import {Upgrade} from './upgrade';

class Software extends Upgrade{
  constructor(private _name:string, private basePrice : number, private multi : number, private _bonus : number, private _affectedStat : string, private _upgradedName: String) {
    super(_name, basePrice, multi , _bonus,  _affectedStat);
  }

  get upgradedName(): String {
    return this._upgradedName;
  }
}
