import { createAction, props } from "@ngrx/store";
import { ITask, TaskType } from "../../models/tasks";

export const addTask = createAction(
   '[Tasks] Add Task',
   props<{ task: ITask }>()
);

export const addTaskSuccess = createAction(
   '[Tasks] Add Task Success',
   props<{ task: ITask }>()
);

export const deleteTasks = createAction(
   '[Tasks] Delete Tasks',
   props<{ tasksIds: number[] }>()
);

export const deleteTasksSuccess = createAction(
   '[Tasks] Delete Tasks Success',
   props<{ tasksIds: number[] }>()
);

export const editTask = createAction(
   '[Tasks] Edit Task',
   props<{ task: ITask }>()
);

export const editTaskSuccess = createAction(
   '[Tasks] Edit Task Success',
   props<{ task: ITask }>()
);

export const editTaskOrder = createAction(
   '[Tasks] Edit Task Order',
   props<{ task: ITask, newStatus: TaskType, preTask: ITask }>()
);

export const editTaskOrderSuccess = createAction(
   '[Tasks] Edit Task Status Success',
   props<{ tasks: ITask[] }>()
);

export const editTaskExecutor = createAction(
   '[Tasks] Edit Task Executor',
   props<{ employeeName: string }>()
);

