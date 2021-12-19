import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as EmployeesActions from "./employees.actions";
import * as TasksActions from "../tasks/tasks.actions";
import { concatMap } from 'rxjs/operators';
import { of } from "rxjs";
import { Store } from "@ngrx/store";

@Injectable()
export class EmployeesEffects {
   constructor(
      private _actions$: Actions,
      private _store: Store
   ) {

   }

   public addEmployee$ = createEffect(() => {
      return this._actions$.pipe(
         ofType(EmployeesActions.addEmployee),
         concatMap((action) => {
            return of(EmployeesActions.addEmployeeSuccess({ employee: action.employee }));
         })
      );
   });

   public deleteEmployee$ = createEffect(() => {
      return this._actions$.pipe(
         ofType(EmployeesActions.deleteEmployee),
         concatMap((action) => {
            this._store.dispatch(TasksActions.editTaskExecutor({employeeName: action.employee.name}));
            return of(EmployeesActions.deleteEmployeeSuccess({ employeeId: action.employee.id }));
         })
      );
   });

}