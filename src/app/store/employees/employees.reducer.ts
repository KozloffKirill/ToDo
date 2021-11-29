import { createReducer, on } from "@ngrx/store";
import { IEmployee, Position } from "../../models/employees";
import * as EmployeesActions from "./employees.actions"

export const employeesFeatureKey = 'employees';

export interface IEmployeesState {
   employees: IEmployee[]
}

export const initialState: IEmployeesState = {
   employees: [
      {
         name: "Козлов Кирилл",
         position: Position.JuniorDeveloper
      },
      {
         name: "Загладкин Илья",
         position: Position.Tester
      },
      {
         name: "Кисляков Никита",
         position: Position.ProjectManager
      },
      {
         name: "Козлов Вячеслав",
         position: Position.Analyst
      },
   ]
}

export const _employeesReducer = createReducer(
   initialState,

   on(EmployeesActions.addEmployeeSuccess, (state, employee) => (
      {
         ...state,
         employees: [...state.employees, employee.employee]
      }
   )),

);

export function employeesReducer(state: any, action: any) {
   return _employeesReducer(state, action);
}