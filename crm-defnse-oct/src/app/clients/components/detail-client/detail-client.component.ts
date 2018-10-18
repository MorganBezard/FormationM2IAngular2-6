import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Clients } from 'src/app/shared/models/clients';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {
  public item: Clients;
  constructor(
    private cs: ClientService
  ) { }

  ngOnInit() {
    this.item = this.cs.item;
  }

}
