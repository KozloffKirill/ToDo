import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IEmployee } from 'src/app/models/employees';
import { selectEmployees } from 'src/app/store/employees/employees.selectors';

@Component({
  selector: 'app-employee-board',
  templateUrl: './employee-board.component.html',
  styleUrls: ['./employee-board.component.css']
})
export class EmployeeBoardComponent implements OnInit, OnDestroy {

  public employees: IEmployee[] = [];
  private _sub!: Subscription;

  constructor(
    private _store: Store
  ) { }

  ngOnInit(): void {
    this._sub = this._store.select(selectEmployees).subscribe(
      (employees) => {
        this.employees = employees;
      }
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

}
