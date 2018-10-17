import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './components/client/client.component';
import { ClientsComponent } from './containers/clients/clients.component';
import { ListeClientsComponent } from './liste-clients/liste-clients/liste-clients.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    FontAwesomeModule

  ],
  declarations: [ClientsComponent, ListeClientsComponent, ClientComponent]
})
export class ClientsModule { }
