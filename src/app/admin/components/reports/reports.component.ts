import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, interactionPlugin];

  constructor() { }

  ngOnInit() {
  }
  handleDateClick(arg) { // handler method
    alert(arg.date);
  }
}
