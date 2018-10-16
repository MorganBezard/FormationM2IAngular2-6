import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakeCollection } from './fake-collection';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection: Prestation[];
  constructor() {
    this.collection = fakeCollection;
  }

  // get collection
  public get collection(): Prestation[] {
    return this._collection;
  }

  // set collection
  public set collection(col: Prestation[]) {
    this._collection = col;
  }

  // update item in collection
  public update(item: Prestation, state: State) {
    item.state = state;
  }

  // add item in collection


  // get item by id
}
