import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizationComponent } from '../authorization/authorization.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public login() {
    this._dialog.open(AuthorizationComponent);
  }

}
