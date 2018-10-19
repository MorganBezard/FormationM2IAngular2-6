import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Clients } from 'src/app/shared/models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection$: Observable<Clients[]>;
  public item: BehaviorSubject<Clients> = new BehaviorSubject(null);
  private itemsCollection: AngularFirestoreCollection<Clients>;

  constructor(private afs: AngularFirestore) {
    // this.collection = fakeCollection;
    // this.item = new BehaviorSubject(this._collection[0]);
    this.itemsCollection = afs.collection<Clients>('client');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      tap(data => {
        console.log(data);
        this.item.next(data[0]);
      })
    );
  }

  // get collection
  public get collection$(): Observable<Clients[]> {
    return this._collection$;
  }

  // set collection
  public set collection$(col: Observable<Clients[]>) {
    this._collection$ = col;
  }

  add(item: Clients): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post('urlapi/prestations', item);
  }


  update(item: Clients, state?: ClientState): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Clients): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  getClients(id: string): Observable<Clients> {
    return this.itemsCollection.doc<Clients>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}
