export enum TaskType {
   Backlog = "Backlog",
   Active = "Active",
   Completed = "Completed",
   Trash = "Trash"
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