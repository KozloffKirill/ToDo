import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { IUser } from 'src/app/models/employees';
import { selectUser } from 'src/app/store/employees/employees.selectors';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

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
