import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IEmployee } from 'src/app/models/employees';
import { ITask } from 'src/app/models/tasks';
import { selectEmployees } from 'src/app/store/employees/employees.selectors';
import { editTask } from 'src/app/store/tasks/tasks.actions';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit, OnDestroy {

  public employees: IEmployee[] = [];
  public priorities: string[] = ['Low', 'Medium', 'High'];
  private _sub = this._store.select(selectEmployees).subscribe(
    (employees) => {
      this.employees = employees;
    }
  );

  public taskEditForm: FormGroup = new FormGroup({
    "taskName": new FormControl(this.task.name, [Validators.required, Validators.maxLength(40)]),
    "taskDescription": new FormControl(this.task.description),
    "taskExecutor": new FormControl(this.task.executor),
    "taskPriority": new FormControl(this.task.priority),
    "taskRemainingWork": new FormControl(this.task.remainingWork)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public task: ITask,
    private _store: Store
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  public editTask() {
    this._store.dispatch(editTask({ task: {
      ...this.task,
      name: this.taskEditForm.controls["taskName"].value,
      description: this.taskEditForm.controls["taskDescription"].value,
      executor: this.taskEditForm.controls["taskExecutor"].value,
      priority: this.taskEditForm.controls["taskPriority"].value,
      remainingWork: this.taskEditForm.controls["taskRemainingWork"].value,
    } }));
  }

}
