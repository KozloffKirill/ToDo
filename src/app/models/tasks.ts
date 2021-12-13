export enum TaskType {
   Backlog = "Backlog",
   Active = "Active",
   Completed = "Completed",
   Trash = "Trash"
}

export enum PriorityType {
   Low = "Low",
   Medium = "Medium",
   High = "High"
}

export interface ITask {
   id: number,
   name: string,
   description: string,
   status: TaskType,
   priority: PriorityType,
   executor: string | null,
   remainingWork: number,
}