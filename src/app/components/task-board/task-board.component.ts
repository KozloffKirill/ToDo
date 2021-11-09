import { Component, OnInit } from '@angular/core';
import { TaskType } from 'src/app/models/tasks';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  public taskType: typeof TaskType = TaskType;

  constructor(

  ) {

  }

  ngOnInit(): void {

  }
}
