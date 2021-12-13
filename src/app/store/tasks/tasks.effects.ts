import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as TasksActions from "./tasks.actions";
import { concatMap } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class TasksEffects {
   constructor(
      private _actions$: Actions,
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

}