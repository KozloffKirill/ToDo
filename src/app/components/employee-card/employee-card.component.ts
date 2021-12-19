import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IEmployee } from 'src/app/models/employees';
import { deleteEmployee } from 'src/app/store/employees/employees.actions';
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
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  public deleteEmployee() {
    this._store.dispatch(deleteEmployee({ employee: this.employee }));
  }

}
