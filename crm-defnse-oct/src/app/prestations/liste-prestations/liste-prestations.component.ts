import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../services/prestation.service';

@Component({
  selector: 'app-liste-prestations',
  templateUrl: './liste-prestations.component.html',
  styleUrls: ['./liste-prestations.component.scss']
})
export class ListePrestationsComponent implements OnInit {

  public collection: Prestation[];
  public header: string[];

  constructor(
    private prestationService: PrestationService
  ) { }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.header = [
      'Type',
      'CLient',
      'Nb Jours',
      'Tjm Ht',
      'Total Ht',
      'Total TTC',
      'Action'
    ];
  }

}
