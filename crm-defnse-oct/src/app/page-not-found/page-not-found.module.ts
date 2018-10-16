import { NgModule } from '@angular/core';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';


@NgModule({
  imports: [
    PageNotFoundRoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
