import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/employees';
import { selectUser } from 'src/app/store/employees/employees.selectors';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, OnDestroy {

  private _sub!: Subscription;

  public user!: IUser;

  constructor(
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

}
