import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { PrestationsComponent } from './containers/prestations/prestations.component';
import { ListePrestationsComponent } from './liste-prestations/liste-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [PrestationsComponent, ListePrestationsComponent, PrestationComponent]
})
export class PrestationsModule { }
