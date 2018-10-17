import { Injectable } from '@angular/core';
import { fakeCollection } from './fake-collection-client';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Clients } from 'src/app/shared/models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection: Clients[];
  constructor() {
    this._collection = fakeCollection;
  }

    // get collection
    public get collection(): Clients[] {
      return this._collection;
    }

    // set collection
    public set collection(col: Clients[]) {
      this._collection = col;
    }

    // update item in collection
    public update(item: Clients, state: ClientState) {
      item.state = state;
    }
}
