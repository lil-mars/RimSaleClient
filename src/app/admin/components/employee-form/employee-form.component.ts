import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      secondName: ['', ],
      fatherName: ['', [Validators.required]],
      motherName: ['', ],
      rol: ['', [Validators.required]],
      user: ['', ],
      password: ['', ],
    });
  }

}
