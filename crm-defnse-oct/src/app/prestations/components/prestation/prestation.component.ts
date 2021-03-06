import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input()
  item: Prestation;
  public states = Object.values(State);
  faTrashAlt = faTrashAlt;

  constructor(private prestationService: PrestationService) {}

  ngOnInit() {}

  public changeState(e: any) {
    const state = e.target.value;
    this.prestationService.update(this.item, state).then((data) => {
      this.item.state = state;
    });
//    this.prestationService.update(this.item, state).subscribe((data) => {
//      this.item.state = state;
//    });
// don't forget to unsub
  }

  public delete() {
    this.prestationService.delete(this.item).then(() => {
      // afficher un message ou retour de l'api
  });
  //   this.prestationService.delete(this.item).subscribe(() => {
  //     // afficher un message ou retour de l'api
  // });
}
}
