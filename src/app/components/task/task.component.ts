import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from 'src/app/models/tasks';
import { TaskEditorComponent } from '../task-editor/task-editor.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() public task!: ITask;

  @HostListener("click") editTask() {
    this._dialog.open(TaskEditorComponent, { data: this.task });
  }

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

}
