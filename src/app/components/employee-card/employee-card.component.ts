import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IEmployee, IUser } from 'src/app/models/employees';
import { deleteEmployee } from 'src/app/store/employees/employees.actions';
import { selectUser } from 'src/app/store/employees/employees.selectors';
import { selectEmployeeWorkload } from 'src/app/store/tasks/tasks.selectors';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public employee!: IEmployee;

  private _sub!: Subscription;
  public workload!: number;

  private _sub2!: Subscription;
  public user!: IUser;

  constructor(
    private _store: Store
  ) { }

  ngOnChanges(): void {
    this._sub = this._store.select(selectEmployeeWorkload(this.employee.name)).subscribe(
      (workload) => {
        this.workload = workload;
      }
    );
  }

  ngOnInit(): void {
    this._sub2 = this._store.select(selectUser).subscribe(
      (user) => this.user = user
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
    this._sub2.unsubscribe();
  }

  public deleteEmployee() {
    this._store.dispatch(deleteEmployee({ employee: this.employee }));
  }

}
