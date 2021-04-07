import {Component, EventEmitter, Input, OnInit, Output, SimpleChange} from '@angular/core';

@Component({
  selector: 'al-planning-workday-item',
  templateUrl: './planning-workday-item.component.html',
  styles: [
  ]
})
export class PlanningWorkdayItemComponent implements OnInit {

  currentWorkday?: any;
  @Input() dueDate?: string;
  @Input() doneTasks?: number | string;
  @Input() remainingTasks?: number | string;

  @Output() workdayRemoved = new EventEmitter<string>();
  //@Input('workday') currentWorkday?:any;

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      this.update(propName, changes[propName].currentValue);
    }
  }

  update(propName:any, propValue:any) {

    switch (propName) {
      case 'dueDate': {
        if ('Lundi' === propValue) { this.dueDate += ' (Aujourd\'hui)'; }
        break;
      }
      case 'doneTasks': {
        if (0 === propValue) { this.doneTasks = 'Aucune tâche terminé.'; }
        break;
      }
      case 'remainingTasks': {
        if (0 === propValue) {
          this.remainingTasks = 'Journée de travail terminée !';
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  removeWorkday(dueDate: any) {
    this.workdayRemoved.emit(dueDate);
  }

  @Input()
  set workday(workday: { dueDate?: any; }){
    this.currentWorkday = workday || {};
    if ('Lundi' === workday.dueDate){
      this.currentWorkday.dueDate += ' (Aujourd\'hui)';
    }
  }

  get workday() { return this.currentWorkday; }

  constructor() { }

  ngOnInit(): void {
  }

}
