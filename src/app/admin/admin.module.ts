import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NavComponent } from './components/nav/nav.component';
import { ReportsComponent } from './components/reports/reports.component';
import { CalendarComponent } from './components/reports/calendar/calendar.component';
import { ReportsSummaryComponent } from './components/reports/reports-summary/reports-summary.component';
import { OthersComponent } from './components/reports/others/others.component';


@NgModule({
  declarations: [
    NavComponent,
    ReportsComponent,
    CalendarComponent,
    OthersComponent,
    ReportsSummaryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FullCalendarModule
  ]
})
export class AdminModule {
}
