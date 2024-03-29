import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './../../../core/services/employee/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeeService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  saveEmployee(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const employee = this.form.value;
      this.employeesService.createEmployee(employee)
        .subscribe((newEmployee) => {
          console.log(newEmployee);
          this.router.navigate(['./admin/employees']);
        });
    }
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      secondName: ['', ],
      lastName: ['', [Validators.required]],
      motherLastName: ['', ],
      roleId: ['', [Validators.required]],
      nick: ['', ],
      password: ['', ]
    });
  }
}
