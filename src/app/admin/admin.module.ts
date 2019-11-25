import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';


@NgModule({
  declarations: [NavComponent, EmployeeFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
