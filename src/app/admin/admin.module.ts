import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NavComponent } from './components/nav/nav.component';

import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import {MaterialModule} from '../material/material.module';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { ReportsComponent } from './components/reports/reports.component';
import { CalendarComponent } from './components/reports/calendar/calendar.component';
import { ReportsSummaryComponent } from './components/reports/reports-summary/reports-summary.component';
import { OthersComponent } from './components/reports/others/others.component';
import { TireListComponent } from './components/tire-list/tire-list.component';
import { TireFormComponent } from './components/tire-form/tire-form.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { TireEditComponent} from './components/tire-list/tire-edit/tire-edit.component';

@NgModule({
  declarations: [
    NavComponent,
    EmployeeFormComponent,
    EmployeesListComponent,
    ReportsComponent,
    CalendarComponent,
    OthersComponent,
    ReportsSummaryComponent,
    EmployeeFormComponent,
    TireListComponent,
    TireFormComponent,
    EmployeeEditComponent,
    TireEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AdminRoutingModule,
    FullCalendarModule,
    ]
})
export class AdminModule {
}
