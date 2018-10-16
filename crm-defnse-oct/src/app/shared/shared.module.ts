import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directies/state.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TotalPipe, TableauComponent, StateDirective],
  exports: [TotalPipe, TableauComponent, StateDirective]
})
export class SharedModule { }
