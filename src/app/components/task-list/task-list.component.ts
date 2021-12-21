import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ITask, TaskType } from 'src/app/models/tasks';
import { deleteTasks, editTaskOrder } from 'src/app/store/tasks/tasks.actions';
import { selectTypeTasks } from 'src/app/store/tasks/tasks.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnChanges, OnInit, OnDestroy, AfterViewChecked {

  @ViewChild('list') taskList!: ElementRef;
  public listHeight!: number;

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
    private _store: Store,
    private _cdr: ChangeDetectorRef
  ) { }

  public deleteTasks() {
    const tasksIds: number[] = this.tasks.map((task) => task.id);
    this._store.dispatch(deleteTasks({ tasksIds: tasksIds }))
  }

  ngOnChanges(): void {
    this._tasks$ = this._store.select(selectTypeTasks(this.taskType));
  }

  ngOnInit(): void {
    this._tasksSub = this._tasks$.subscribe(
      (tasks) => this.tasks = tasks
    );
  }

  ngAfterViewChecked(): void {
    this.listHeight = this.taskList.nativeElement.offsetHeight;
    this._cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this._tasksSub.unsubscribe();
  }

  public drop(event: CdkDragDrop<ITask[]>) {
    if (event.item.dropContainer.data[event.previousIndex].status == this.taskType && event.previousIndex == event.currentIndex) return;
    this._store.dispatch(editTaskOrder(
      {
        task: event.item.dropContainer.data[event.previousIndex],
        newStatus: this.taskType,
        preTask: this.tasks[event.currentIndex]
      }));
  }

}
