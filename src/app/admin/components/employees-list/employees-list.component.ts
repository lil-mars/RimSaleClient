import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './../../../core/services/employee/employee.service';
import {Employee} from './../../../core/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {

  private employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'completName', 'rol', 'actions'];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.fetchEmployess();
  }

  fetchEmployess() {
    this.employeeService.getAllEmployee().subscribe(employees => {
      this.employees = employees;
      // console.log(employees);
    } );
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(rta => {
        this.fetchEmployess();
      });
  }

}
