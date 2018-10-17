import { Component, Input, OnInit } from '@angular/core';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Clients } from 'src/app/shared/models/clients';
import { ClientService } from '../../services/client.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() item: Clients;
  public states = Object.values(ClientState);
  faTrashAlt = faTrashAlt;


  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
  }

  public changeState(e: any) {

    const state = e.target.value;
    this.clientService.update(this.item, state);
  }

  public delete() {
    this.clientService.delete(this.item);
  }

}
