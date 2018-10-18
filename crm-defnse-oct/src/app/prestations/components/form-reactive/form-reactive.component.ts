import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  public states = Object.values(State);
  public form: FormGroup;
  private init = new Prestation();
  @Output() newItem: EventEmitter<Prestation> = new EventEmitter();


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      type_presta: [
        this.init.type_presta,
        Validators.required
      ],
      client: [
        this.init.client,
        Validators.compose([
          Validators.required,
          Validators.minLength(2)
        ])
      ],
      nb_jours: [
        this.init.nb_jours
      ],
      tjm_ht: [
        this.init.tjm_ht
      ],
      taux_tva: [
        this.init.taux_tva
      ],
      state: [
        this.init.state
      ]
    });
  }

  public process() {
    this.newItem.emit(this.form.value);
  }

  public isError(fieldname: string): boolean {
    return this.form.get(fieldname).invalid && this.form.get(fieldname).touched;
  }

}
