import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../services/prestation.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-liste-prestations',
  templateUrl: './liste-prestations.component.html',
  styleUrls: ['./liste-prestations.component.scss']
})
export class ListePrestationsComponent implements OnInit, OnDestroy {

  public collection$: Observable<Prestation[]>;
  // public collection: Prestation[];
  public headers: string[];
  // private sub: Subscription;

  constructor(
    private prestationService: PrestationService
  ) { }

  ngOnInit() {
    this.collection$ = this.prestationService.collection$;
// this.sub = this.prestationService.collection$.subscribe((data) => {
//   this.collection$ = data;
// });
    this.headers = [
      'Type',
      'CLient',
      'Nb Jours',
      'Tjm Ht',
      'Total Ht',
      'Total TTC',
      'Action',
      'Delete'
    ];
  }

  ngOnDestroy() {
  //  this.sub.unsubscribe();
  }

}
