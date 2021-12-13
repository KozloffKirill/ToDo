import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() public task!: ITask;

  @HostListener("click") editTask() {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
