export enum EPosition {
   JuniorDeveloper = "Junior Developer",
   MiddleDeveloper = "Middle Developer",
   SeniorDeveloper = "Senior Developer",
   ProjectManager = "Project Manager",
   Tester = "Tester",
   Analyst = "Analyst"
}

export interface IEmployee {
   name: string,
   position: EPosition
}