import { createReducer, on } from "@ngrx/store";
import { TasksHelper } from "../../helpers/tasks.helper";
import { ITask, TaskType } from "../../models/tasks";
import * as TasksActions from "./tasks.actions";

export const tasksFeatureKey = 'tasks';

export interface ITasksState {
   tasks: ITask[]
}

export const initialState: ITasksState = {
   tasks: [
      {
         id: TasksHelper.getNewId(),
         name: 'Купить домой очень большой пылесос',
         description: 'Мать сказала купить пылесос',
         status: TaskType.Active
      },
      {
         id: TasksHelper.getNewId(),
         name: 'Покормить кота',
         description: 'Надо срочно покормить кота, он не ел много дней',
         status: TaskType.Completed
      },
      {
         id: TasksHelper.getNewId(),
         name: 'Доделать курсовую работу',
         description: 'нада делать ыыыы',
         status: TaskType.Active
      },
      {
         id: TasksHelper.getNewId(),
         name: 'Приготовить кашу',
         description: 'Надо приготовить овсяную кашу на завтрак',
         status: TaskType.Backlog
      },
      {
         id: TasksHelper.getNewId(),
         name: 'Название задачи #5',
         description: 'Описание задачи описание задачи описание задачи описание задачи описание задачи',
         status: TaskType.Backlog
      },
      {
         id: TasksHelper.getNewId(),
         name: 'Помогите',
         description: 'Меня держат здесь взаперти',
         status: TaskType.Active
      },
   ]
}

export const _tasksReducer = createReducer(
   initialState,

   on(TasksActions.addTaskSuccess, (state, task) => (
      {
         ...state,
         tasks: [...state.tasks, task.task]
      }
   )),

   on(TasksActions.deleteTasksSuccess, (state, tasksIds) => (
      {
         ...state,
         tasks: state.tasks.filter((task) => {
            return tasksIds.tasksIds.indexOf(task.id) == -1;
         })
      }
   )),
);

export function tasksReducer(state: any, action: any) {
   return _tasksReducer(state, action);
}