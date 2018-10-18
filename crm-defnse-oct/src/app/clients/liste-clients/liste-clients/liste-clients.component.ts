import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Clients } from 'src/app/shared/models/clients';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {


  public collection$: Observable<Clients[]>;
  public headers: string[];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.collection$ = this.clientService.collection$;
    this.headers = [
      'ID',
      'Nom',
      'Adresse',
      'Code Postal',
      'Ville',
      'Etat',
      'Delete'
    ];
  }

}
