import { ClientState } from '../enums/client-state.enum';

export interface ClientsI {
  id: string;
  nom: string;
  adresse: string;
  codePostal: number;
  ville: string;
  state: ClientState;
}
