import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as EmployeesActions from "./employees.actions";
import { concatMap } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class EmployeesEffects {
   constructor(
      private _actions$: Actions,
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

}