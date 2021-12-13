import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TasksHelper } from 'src/app/helpers/tasks.helper';
import { ITask, PriorityType, TaskType } from 'src/app/models/tasks';
import { addTask } from 'src/app/store/tasks/tasks.actions';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  public taskName: string = '';
  public taskDescription: string = '';

  constructor(
    private _store: Store
  ) { }

  ngOnInit(): void {
  }

  public addTask(): void {
    const newTask: ITask = {
      id: TasksHelper.getNewId(),
      name: this.taskName,
      description: this.taskDescription,
      status: TaskType.Trash,
      executor: null,
      remainingWork: 0,
      priority: PriorityType.Low
    };
    this._store.dispatch(addTask({ task: newTask }));

    this.taskName = '';
    this.taskDescription = '';
  }

}
