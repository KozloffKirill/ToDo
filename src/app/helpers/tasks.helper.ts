export class TasksHelper {
   private static _id: number = 0;

   public static getNewId() {
      return this._id++;
   }
}