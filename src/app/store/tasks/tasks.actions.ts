import { createAction, props } from "@ngrx/store";
import { ITask } from "../../models/tasks";

export const addTask = createAction(
   '[Tasks] Add Task',
   props<{ task: ITask }>()
);

export const addTaskSuccess = createAction(
   '[Tasks] Add Task Success',
   props<{ task: ITask }>()
);

export const deleteTasks = createAction(
   '[Tasks] Delete Task',
   props<{ tasksIds: number[] }>()
);

export const deleteTasksSuccess = createAction(
   '[Tasks] Delete Task Success',
   props<{ tasksIds: number[] }>()
);