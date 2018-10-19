import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Prestation): void {
    this.prestationService.add(item).then((data) => {
    // if and else when using your api to redirect or display msg
    this.router.navigate(['prestations']);
  });

//    this.prestationService.add(item).subscribe((data) => {
//    // if and else when using your api to redirect or display msg
//    this.router.navigate(['prestations']);
//  });
}
}
