import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { FormComponent } from './components/form/form.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { PrestationsComponent } from './containers/prestations/prestations.component';
import { ListePrestationsComponent } from './liste-prestations/liste-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    TemplatesModule,
    FormsModule,
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [PrestationsComponent, ListePrestationsComponent, PrestationComponent, AddPrestationComponent, EditPrestationComponent, FormComponent]
})
export class PrestationsModule { }
