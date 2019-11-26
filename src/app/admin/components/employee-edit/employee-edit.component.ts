import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../../core/services/employee/employee.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.employeesService.getEmployee(this.id)
        .subscribe( employee => {
          this.form.patchValue(employee);
        });
    });
  }
  saveEmployee(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const employee = this.form.value;
      this.employeesService.updateEmployee(this.id, employee)
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
