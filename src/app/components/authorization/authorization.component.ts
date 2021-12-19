import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IUser, Role } from 'src/app/models/employees';
import { editUser } from 'src/app/store/employees/employees.actions';
import { selectAccounts } from 'src/app/store/employees/employees.selectors';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit, OnDestroy {

  public userLogin: string = '';
  public userPassword: string = '';

  private _accounts: string[] = [];
  private _sub!: Subscription;

  constructor(
    private _store: Store,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._sub = this._store.select(selectAccounts).subscribe(
      (accounts) => this._accounts = accounts
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe;
  }

  public userAuthorization() {
    if (this._accounts.find((account) => (account == this.userLogin) && (account == this.userPassword))) {
      const user: IUser = {
        name: this.userLogin,
        role: Role.employee
      }
      if (this.userLogin == "Кисляков Никита") {
        console.log('abc');
        user.role = Role.admin;
      }
      this._store.dispatch(editUser({ user: user }));
      this._dialog.closeAll();

    } else alert('Пожалуйста, укажите верные логин и пароль');
    this.userLogin = this.userPassword = '';
  }

}
