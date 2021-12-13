import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEmployee, Position } from 'src/app/models/employees';
import { addEmployee } from 'src/app/store/employees/employees.actions';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  public employeeName: string = '';
  public employeePosition: string = 'Junior Developer';

  public positions: string[] = [
    'Junior Developer',
    'Middle Developer',
    'Senior Developer',
    'Project Manager',
    'Tester',
    'Analyst'
  ];


  constructor(
    private _store: Store
  ) { }

  ngOnInit(): void {
  }

  public addEmployee(): void {
    let position: Position;
    switch (this.employeePosition) {
      case 'Junior Developer':
        position = Position.JuniorDeveloper
        break;
      case 'Middle Developer':
        position = Position.MiddleDeveloper
        break;
      case 'Senior Developer':
        position = Position.SeniorDeveloper
        break;
      case 'Project Manager':
        position = Position.ProjectManager
        break;
      case 'Tester':
        position = Position.Tester
        break;
      case 'Analyst':
        position = Position.Analyst
        break;
      default:
        position = Position.JuniorDeveloper
        break;
    }
    const newEmployee: IEmployee = {
      name: this.employeeName,
      position: position
    }
    this._store.dispatch(addEmployee({ employee: newEmployee }));
    this.employeeName = '';
  }

}
