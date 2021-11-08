import { Component, Input, OnInit } from '@angular/core';
import { TaskType } from 'src/app/models/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() public taskType!: TaskType;

  public titles: Record<TaskType, string> = {
    [TaskType.Backlog]: 'Бэклог',
    [TaskType.Active]: 'В процессе',
    [TaskType.Completed]: 'Готово',
    [TaskType.Trash]: 'Корзина',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
