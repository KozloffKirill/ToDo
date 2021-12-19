import { createAction, props } from "@ngrx/store";
import { IEmployee } from "../../models/employees";

export const addEmployee = createAction(
   '[Employees] Add Employee',
   props<{ employee: IEmployee }>()
);

export const addEmployeeSuccess = createAction(
   '[Employees] Add Employee Success',
   props<{ employee: IEmployee }>()
);

export const deleteEmployee = createAction(
   '[Employees] Delete Employee',
   props<{ employee: IEmployee }>()
);

export const deleteEmployeeSuccess = createAction(
   '[Employees] Delete Employee Success',
   props<{ employeeId: number }>()
);