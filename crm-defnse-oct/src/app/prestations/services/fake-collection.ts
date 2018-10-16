import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';

export const fakeCollection: Prestation[] = [
    new Prestation({
    id: 'al',
    type_presta: 'Formation',
    client: 'Atos',
    nb_jours: 5,
    tjm_ht: 700,
    taux_tva: 20,
    state: State.OPTION
  }),
    new Prestation({
    id: 'v2',
    type_presta: 'Coaching',
    client: 'Capgemini',
    nb_jours: 10,
    tjm_ht: 900,
    state: State.CONFIRME
  }),

];
