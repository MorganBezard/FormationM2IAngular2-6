import { Clients } from 'src/app/shared/models/clients';
import { ClientState } from 'src/app/shared/enums/client-state.enum';

export const fakeCollection: Clients[] = [
  new Clients( {
    id: 'toto',
    nom: 'toto',
    adresse: 'toto land',
    codePostal: 45100,
    ville: 'toto city',
    state: ClientState.ACTIF

  }),
  new Clients( {
    id: 'bobby',
    nom: 'bobby',
    adresse: 'bobby land',
    codePostal: 12345,
    ville: 'bobby city',
    state: ClientState.PASSIF

  }),

];
