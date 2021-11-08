import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() public taskName!: String;
  @Input() public taskDescription!: String;


  constructor() { }

  ngOnInit(): void {
  }

}
