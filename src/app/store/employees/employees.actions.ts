import { createAction, props } from "@ngrx/store";
import { IEmployee } from "../../models/employees";

export const addEmployee = createAction(
   '[Tasks] Add Employee',
   props<{ employee: IEmployee }>()
);

export const addEmployeeSuccess = createAction(
   '[Tasks] Add Employee Success',
   props<{ employee: IEmployee }>()
);