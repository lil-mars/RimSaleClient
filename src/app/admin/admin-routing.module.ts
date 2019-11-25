import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ReportsComponent } from './components/reports/reports.component';
import {EmployeesListComponent} from './components/employees-list/employees-list.component';
import {TireListComponent} from './components/tire-list/tire-list.component';
import {TireFormComponent} from './components/tire-form/tire-form.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children:
    [
      {
        path: '',
        component: ReportsComponent
      },
      {
        path: 'employees',
        component: EmployeesListComponent
      },
      {
        path: 'employees/create',
        component: EmployeeFormComponent
      },
      {
        path: 'tires',
        component: TireListComponent
      },
      {
        path: 'tires/create',
        component: TireFormComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
