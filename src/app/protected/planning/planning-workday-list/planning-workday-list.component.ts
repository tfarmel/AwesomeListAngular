import { Component, OnInit } from '@angular/core';
import {delay} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'al-planning-workday-list',
  templateUrl: './planning-workday-list.component.html',
  styles: []
})
export class PlanningWorkdayListComponent implements OnInit {

  public workdays$:any;
  public workdays:any;

  workday:any;

  constructor() { }

  ngOnInit() {
    this.workdays = [
      { dueDate: 'Lundi', doneTasks: 1, remainingTasks: 3 },
      { dueDate: 'Mardi', doneTasks: 0, remainingTasks: 2 },
      { dueDate: 'Mercredi', doneTasks: 0, remainingTasks: 1 }
    ];

    this.workdays$ = of(this.workdays).pipe(delay(1000));
  }

  onWorkdayRemoved(dueDate: string) {
    //this.workdays = this.workdays.filter((workday =>
    this.workdays = this.workdays.filter((workday: { dueDate: string; }) =>
      !dueDate.includes(workday.dueDate)
    );
    this.workdays$ = of(this.workdays);
  }

}
