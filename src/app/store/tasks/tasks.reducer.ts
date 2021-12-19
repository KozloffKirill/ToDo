import { createReducer, on } from "@ngrx/store";
import { TasksHelper } from "../../helpers/tasks.helper";
import { ITask, PriorityType, TaskType } from "../../models/tasks";
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
         status: TaskType.Active,
         priority: PriorityType.Low,
         executor: null,
         remainingWork: 10,
      },
      {
         id: TasksHelper.getNewId(),
         name: 'Покормить кота',
         description: 'Надо срочно покормить кота, он не ел много дней',
         status: TaskType.Completed,
         priority: PriorityType.Medium,
         executor: 'Кисляков Никита',
         remainingWork: 12,
      },
      {
         id: TasksHelper.getNewId(),
         name: 'Доделать курсовую работу',
         description: 'нада делать ыыыы',
         status: TaskType.Active,
         priority: PriorityType.High,
         executor: 'Козлов Вячеслав',
         remainingWork: 0,
      },
      {
         id: TasksHelper.getNewId(),
         name: 'Приготовить кашу',
         description: 'Надо приготовить овсяную кашу на завтрак',
         status: TaskType.Backlog,
         priority: PriorityType.Low,
         executor: null,
         remainingWork: 2,
      },
      {
         id: TasksHelper.getNewId(),
         name: 'Название задачи #5',
         description: 'Описание задачи описание задачи описание задачи описание задачи описание задачи',
         status: TaskType.Backlog,
         priority: PriorityType.High,
         executor: 'Козлов Кирилл',
         remainingWork: 5,
      },
      {
         id: TasksHelper.getNewId(),
         name: 'Помогите',
         description: 'Меня держат здесь взаперти',
         status: TaskType.Active,
         priority: PriorityType.Low,
         executor: 'Загладкин Илья',
         remainingWork: 1,
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

   on(TasksActions.editTaskSuccess, (state, task) => (
      {
         ...state,
         tasks: state.tasks.map((item) => {
            if (item.id == task.task.id) {
               return task.task;
            } else return item;
         })
      }
   )),

   on(TasksActions.editTaskExecutor, (state, executor) => (
      {
         ...state,
         tasks: state.tasks.map((task) => {
            if (task.executor == executor.employeeName) {
               let newTask = Object.assign({}, task);
               newTask.executor = null;
               return newTask;
            }
            return task;
         })
      }
   )),
);

export function tasksReducer(state: any, action: any) {
   return _tasksReducer(state, action);
}