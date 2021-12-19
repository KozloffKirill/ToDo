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