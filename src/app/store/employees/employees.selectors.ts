import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as employeesReducer from "./employees.reducer"

const selectState = createFeatureSelector<employeesReducer.IEmployeesState>(
   employeesReducer.employeesFeatureKey
);

export const selectEmployees = createSelector(
   selectState,
   (state: employeesReducer.IEmployeesState) => state.employees
);
