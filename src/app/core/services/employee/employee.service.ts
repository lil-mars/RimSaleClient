import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Employee} from '../../models/employee.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) {

  }

  getAllEmployee() {
    return this.http.get<Employee[]>(`${environment.url_employee}/index`);
  }

  getEmployee(id: number) {
    return this.http.get<Employee>(`${environment.url_employee}/${id}`);
  }

  createEmployee(employee: Employee) {
    return this.http.post(`${environment.url_employee}/create`, employee);
  }
  updateEmployee(id: number, changes: Partial<Employee> ) {
    return this.http.put(`${environment.url_employee}/update/${id}`, changes);
  }
  deleteEmployee(id: number) {
    return this.http.delete(`${environment.url_employee}/delete/${id}`);
  }
}

