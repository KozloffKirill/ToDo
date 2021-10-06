import { createReducer, on } from "@ngrx/store";
import { ITask } from "../models/tasks";
import * as TasksActions from "./tasks.actions";

export const tasksFeatureKey = 'tasks';

export interface ITasksState {
   tasks: ITask[]
}

export const initialState: ITasksState = {
   tasks: []
}

export const _tasksReducer = createReducer(
   initialState,

   on(TasksActions.addTask, (state, task) => (
      {
         ...state
      }
   )),
);

export function tasksReducer(state: any, action: any) {
   return _tasksReducer(state, action);
}