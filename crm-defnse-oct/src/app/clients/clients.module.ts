import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './components/client/client.component';
import { ClientsComponent } from './containers/clients/clients.component';
import { ListeClientsComponent } from './liste-clients/liste-clients/liste-clients.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplatesModule } from '../templates/templates.module';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { AccordeonComponent } from './components/accordeon/accordeon.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    TemplatesModule,
    NgbAccordionModule

  ],
  declarations: [ClientsComponent, ListeClientsComponent, ClientComponent, DetailClientComponent, AccordeonComponent]
})
export class ClientsModule { }
