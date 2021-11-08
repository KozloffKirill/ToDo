import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ITask } from 'src/app/models/tasks';
import { selectTasks } from 'src/app/store/tasks.selectors';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit, OnDestroy {

  public tasks: ITask[] = [];

  private _tasks$ = this._store.pipe(
    select(selectTasks)
  );
  
  constructor(
    private _store: Store
  ) {

  }

  ngOnInit(): void {

    this._tasks$.subscribe(
      (tasks) => this.tasks = tasks
    );
  }

  ngOnDestroy(): void {

  }
}
