export enum Position {
   JuniorDeveloper = "Junior Developer",
   MiddleDeveloper = "Middle Developer",
   SeniorDeveloper = "Senior Developer",
   ProjectManager = "Project Manager",
   Tester = "Tester",
   Analyst = "Analyst"
}

export interface IEmployee {
   id: number,
   name: string,
   position: Position
}

export enum Role {
   anonym = "Anonym",
   employee = "Employee",
   admin = "Admin"
}

export interface IUser {
   name: string | null,
   role: Role
}