import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as TasksActions from "./tasks.actions";
import { concatMap, withLatestFrom } from 'rxjs/operators';
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { selectTasks } from "./tasks.selectors";
import { ITask } from "src/app/models/tasks";

@Injectable()
export class TasksEffects {
   constructor(
      private _actions$: Actions,
      private _store: Store
   ) {

   }

   public addTask$ = createEffect(() => {
      return this._actions$.pipe(
         ofType(TasksActions.addTask),
         concatMap((action) => {
            return of(TasksActions.addTaskSuccess({ task: action.task }));
         })
      );
   });

   public deleteTasks$ = createEffect(() => {
      return this._actions$.pipe(
         ofType(TasksActions.deleteTasks),
         concatMap((action) => {
            return of(TasksActions.deleteTasksSuccess({ tasksIds: action.tasksIds }));
         })
      );
   });

   public editTask$ = createEffect(() => {
      return this._actions$.pipe(
         ofType(TasksActions.editTask),
         concatMap((action) => {
            return of(TasksActions.editTaskSuccess({ task: action.task }));
         })
      );
   });

   public editTaskStatus$ = createEffect(() => {
      return this._actions$.pipe(
         ofType(TasksActions.editTaskOrder),
         withLatestFrom(this._store.select(selectTasks)),
         concatMap(([action, tasks]) => {
            let newTasks = tasks.slice();
            const newTask = Object.assign({}, action.task);
            const indexNewTask = newTasks.findIndex((task) => task.id == action.task.id);
            if (action.newStatus == action.task.status) {
               const preTask = Object.assign({}, action.preTask);
               const indexPreTask = newTasks.findIndex((task) => task.id == action.preTask.id);
               if (indexNewTask < indexPreTask) {
                  newTasks.splice(indexNewTask, 1);
                  const indexPreTask = newTasks.findIndex((task) => task.id == action.preTask.id);
                  newTasks.splice(indexPreTask, 1, preTask, newTask);
               } else {
                  newTasks.splice(indexNewTask, 1);
                  const indexPreTask = newTasks.findIndex((task) => task.id == action.preTask.id);
                  newTasks.splice(indexPreTask, 1, newTask, preTask);
               }
            } else {
               newTasks.splice(indexNewTask, 1);
               newTask.status = action.newStatus;
               if (action.preTask) {
                  const preTask = Object.assign({}, action.preTask);
                  const indexPreTask = newTasks.findIndex((task) => task.id == action.preTask.id);
                  newTasks.splice(indexPreTask, 1, newTask, preTask);
               } else {
                  newTasks.push(newTask);
               }
            }
            
            return of(TasksActions.editTaskOrderSuccess({ tasks: newTasks }));
         })
      );
   });

}