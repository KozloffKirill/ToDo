import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IUser, Role } from 'src/app/models/employees';
import { editUser } from 'src/app/store/employees/employees.actions';
import { selectUser } from 'src/app/store/employees/employees.selectors';
import { AuthorizationComponent } from '../authorization/authorization.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private _sub!: Subscription;

  public user!: IUser;

  constructor(
    private _dialog: MatDialog,
    private _store: Store
  ) { }

  ngOnInit(): void {
    this._sub = this._store.select(selectUser).subscribe(
      (user) => this.user = user
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  public login() {
    this._dialog.open(AuthorizationComponent);
  }

  public logout() {
    const newUser: IUser = {
      name: null,
      role: Role.anonym
    }
    this._store.dispatch(editUser({user: newUser}));
  }

}
