import { createAction, props } from "@ngrx/store";
import { ITask } from "../models/tasks";

export const addTask = createAction(
   '[Tasks] Add Task',
   props<{ task: ITask }>()
);

export const addTaskSuccess = createAction(
   '[Tasks] Add Task Success',
   props<{ task: ITask }>()
);