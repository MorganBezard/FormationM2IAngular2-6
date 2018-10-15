import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { UiComponent } from './containers/ui/ui.component';
import { LoginComponent } from '../login/containers/login/login.component';
import { LoginModule } from '../login/login.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule
  ],
  declarations: [UiComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [UiComponent]
})
export class UiModule { }
