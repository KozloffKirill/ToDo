import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ITask, TaskType } from 'src/app/models/tasks';
import { selectTypeTasks } from 'src/app/store/tasks.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnChanges, OnInit, OnDestroy {

  @Input() public taskType!: TaskType;

  public titles: Record<TaskType, string> = {
    [TaskType.Backlog]: 'Бэклог',
    [TaskType.Active]: 'В процессе',
    [TaskType.Completed]: 'Готово',
    [TaskType.Trash]: 'Корзина',
  }

  public tasks: ITask[] = [];

  private _tasks$!: Observable<ITask[]>;
  private _tasksSub!: Subscription;

  constructor(
    private _store: Store
  ) { }

  ngOnChanges(): void {
    this._tasks$ = this._store.select(selectTypeTasks(this.taskType))
  }

  ngOnInit(): void {
    this._tasksSub = this._tasks$.subscribe(
      (tasks) => this.tasks = tasks
    );
  }

  ngOnDestroy(): void {
    this._tasksSub.unsubscribe();
  }

}
