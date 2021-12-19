import { createReducer, on } from "@ngrx/store";
import { EmployeesHelper } from "src/app/helpers/employees.helper";
import { IEmployee, IUser, Position, Role } from "../../models/employees";
import * as EmployeesActions from "./employees.actions"

export const employeesFeatureKey = 'employees';

export interface IEmployeesState {
   employees: IEmployee[],
   user: IUser
}

export const initialState: IEmployeesState = {
   employees: [
      {
         id: EmployeesHelper.getNewId(),
         name: "Козлов Кирилл",
         position: Position.JuniorDeveloper,
      },
      {
         id: EmployeesHelper.getNewId(),
         name: "Загладкин Илья",
         position: Position.Tester
      },
      {
         id: EmployeesHelper.getNewId(),
         name: "Кисляков Никита",
         position: Position.ProjectManager
      },
      {
         id: EmployeesHelper.getNewId(),
         name: "Козлов Вячеслав",
         position: Position.Analyst
      },
   ],
   user: {
      name: null,
      role: Role.anonym
   }
}

export const _employeesReducer = createReducer(
   initialState,

   on(EmployeesActions.addEmployeeSuccess, (state, employee) => (
      {
         ...state,
         employees: [...state.employees, employee.employee]
      }
   )),

   on(EmployeesActions.deleteEmployeeSuccess, (state, employeeId) => (
      {
         ...state,
         employees: state.employees.filter((employee) => {
            return employee.id != employeeId.employeeId
         })
      }
   )),

   on(EmployeesActions.editUser, (state, user) => (
      {
         ...state,
         user: user.user
      }
   )),

);

export function employeesReducer(state: any, action: any) {
   return _employeesReducer(state, action);
}