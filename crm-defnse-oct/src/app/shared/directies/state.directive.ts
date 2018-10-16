import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit {

  @Input() appState: string;
  @HostBinding('class') nomClass: string;
  constructor() {
  }

  ngOnInit() {
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }
  private formatClass(state: string): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}
