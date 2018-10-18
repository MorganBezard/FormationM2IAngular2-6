import { Injectable } from '@angular/core';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Clients } from 'src/app/shared/models/clients';
import { fakeCollection } from './fake-collection-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection: Clients[];
  public item: BehaviorSubject<Clients>;

  constructor() {
    this._collection = fakeCollection;
    this.item = new BehaviorSubject(this._collection[0]);
  }

  // get collection
  public get collection(): Clients[] {
    return this._collection;
  }

  // set collection
  public set collection(col: Clients[]) {
    this._collection = col;
  }

  // delete item in collection
  public delete(item: Clients): void {
    console.log('item deleted');
  }

  // update item in collection
  public update(item: Clients, state: ClientState) {
    item.state = state;
  }
}
