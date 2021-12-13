import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  public employeeName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public addEmployee(): void {
    this.employeeName = '';
  }

}
