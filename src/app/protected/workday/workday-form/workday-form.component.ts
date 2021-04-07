import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'al-workday-form',
  templateUrl: './workday-form.component.html',
  styles: [
  ]
})
export class WorkdayFormComponent implements OnInit {

  workdayForm!: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.workdayForm = this.createWorkdayForm();
  }

  get dueDate() { return this.workdayForm.get('dueDate'); }
  get notes() { return this.workdayForm.get('notes'); }
  get tasks() { return this.workdayForm.get('tasks') as FormArray; }

  createWorkdayForm(){
    return this.fb.group({
      'dueDate': '',
      'tasks': this.fb.array([]),
      'notes': '',
    });
  }

  submit(): void {
    console.info(this.workdayForm.value);
  }

}
