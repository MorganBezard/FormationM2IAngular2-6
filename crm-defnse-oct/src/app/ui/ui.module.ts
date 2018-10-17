import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from '../login/login.module';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { UiComponent } from './containers/ui/ui.component';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [UiComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [UiComponent]
})
export class UiModule { }
