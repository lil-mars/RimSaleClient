import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  constructor() { }

  ngOnInit() {
  }

}
