import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './containers/clients/clients.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { AccordeonComponent } from './components/accordeon/accordeon.component';

const appRoutes: Routes = [
  {
    path: '',
  component: ClientsComponent,
  children: [
    { path: 'detail', component: DetailClientComponent},
    { path: 'accordeon', component: AccordeonComponent}
  ]
},
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClientsRoutingModule { }
