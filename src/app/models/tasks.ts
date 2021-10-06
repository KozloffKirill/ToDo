export enum TaskType {
   Backlog,
   Active,
   Completed,
   Trash
}

export enum PriorityType {
   Low,
   Medium,
   High
}

export interface ITask {
   name: string,
   description: string,
   status: TaskType,
   priority?: PriorityType,
}