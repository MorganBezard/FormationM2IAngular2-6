import { ClientState } from '../enums/client-state.enum';
import { ClientsI } from '../interfaces/clients-i';

export class Clients implements ClientsI {
  id: string;
  nom: string;
  adresse: string;
  codePostal: number;
  ville: string;
  state = ClientState.ACTIF;
  constructor(client?: Clients) {
    Object.assign(this, client);
  }
}
