import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';


@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  public states = Object.values(State);

  constructor(
    private prestationService: PrestationService
  ) { }

  ngOnInit() {
  }

  public changeState(e: any) {
    const state = e.target.value;
    this.prestationService.update(this.item, state);
  }

}
