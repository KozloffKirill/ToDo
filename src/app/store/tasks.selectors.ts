import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as tasksReducer from "./tasks.reducer"

const selectState = createFeatureSelector<tasksReducer.ITasksState>(
   tasksReducer.tasksFeatureKey
);

export const selectTasks = createSelector(
   selectState,
   (state: tasksReducer.ITasksState) => state.tasks
);