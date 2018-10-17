import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Clients } from 'src/app/shared/models/clients';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {

  public collection: Clients[];
  public headers: string[];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.collection = this.clientService.collection;
    this.headers = [
      'ID',
      'Nom',
      'Adresse',
      'Code Postal',
      'Ville',
      'Etat',
    ];
  }

}
