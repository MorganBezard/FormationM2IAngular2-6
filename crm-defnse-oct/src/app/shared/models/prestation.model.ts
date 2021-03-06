import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  type_presta: string;
  client: string;
  nb_jours = 0;
  tjm_ht = 0;
  taux_tva = 20;
  state = State.OPTION;
  constructor(field?: Partial<Prestation>) {
    if (field) {
      Object.assign(this, field);
    }
  }

  totalHT() {

    return this.nb_jours * this.tjm_ht;
  }

  totalTTC(tva?) {

    if (!tva) {
      return this.totalHT() * (1 + this.taux_tva / 100);
    }
    if (tva <= 0) {
      return this.totalHT();
    }
    return this.totalHT() * (1 + tva / 100);
  }
}
