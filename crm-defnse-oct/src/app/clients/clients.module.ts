import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './containers/clients/clients.component';
import { ListeClientsComponent } from './liste-clients/liste-clients/liste-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ],
  declarations: [ClientsComponent, ListeClientsComponent, ClientComponent]
})
export class ClientsModule { }
