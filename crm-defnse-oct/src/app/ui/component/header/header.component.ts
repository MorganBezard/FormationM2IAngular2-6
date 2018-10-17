import { Component, OnInit } from '@angular/core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'crm la defense';
  faBars = faBars;
  faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

}
