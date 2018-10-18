import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { fakeCollection } from './fake-collection';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection$: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;


  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestation');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map((data) => data.map ( item => new Prestation(item)))
      // map((data) => {
      //    map((item) => {
      //    return new Prestation(item);
      //  })
      // })
    );
    // this.collection = fakeCollection;
  }

  // get collection
  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set collection
  public set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  // update item in collection
  public update(item: Prestation, state?: State) {
    if (state) {
      item.state = state;
    }
  }

  // delete item in collection
  public delete(item: Prestation): void {
    console.log('item deleted');
  }

  // add item in collection

  public add(item: Prestation): void {
    // this.collection.push(new Prestation (item));
  }

  // get item by id
}
