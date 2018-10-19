import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Clients } from 'src/app/shared/models/clients';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input()
  item: Clients;
  public states = Object.values(ClientState);
  faTrashAlt = faTrashAlt;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  public changeState(e: any) {
    const state = e.target.value;
    this.clientService.update(this.item, state).then(data => {
      this.item = state;
    });
  }

  public deleteState() {
    this.clientService.delete(this.item).then(() => {
      // commentaire bidon
    });
  }

  public getDetail() {
    this.router.navigate(['detail'], { relativeTo: this.route });
    this.clientService.item.next(this.item);
  }
}
