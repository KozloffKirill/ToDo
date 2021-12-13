import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/tasks';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {

  @Input() task!: ITask;

  constructor() {
  }

  ngOnInit(): void {

  }

}
