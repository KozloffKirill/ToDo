import { createAction, props } from "@ngrx/store";
import { ITask } from "../models/tasks";

export const addTask = createAction(
   '[Tasks] Add Task',
   props<{ task: ITask }>()
);