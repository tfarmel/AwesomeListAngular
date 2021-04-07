import { Task } from "./task";

export class Workday {

  readonly id: string | null; // identifiant de la journée de travail
     dueDate: number; // date de la journée de travail
     notes?: string; // notes éventuelles (facultatif)
     tasks: Task[]; // la liste des tâches à faire
     userId: string; // identifiant de l’utilisateur

     constructor(options: {
         id?: string,
         dueDate?: number,
         notes?: string,
         tasks?: Task[],
         userId: string
       }){
         this.id = options.id || null;
         this.dueDate = options.dueDate || 0;
         this.notes = options.notes || '';
         this.tasks = [new Task()];
         this.userId = options.userId;
      }

}
