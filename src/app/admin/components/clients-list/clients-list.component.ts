import { Component, OnInit } from '@angular/core';
import {ClientService} from './../../../core/services/client/client.service';
import {Customer} from './../../../core/models/customer.model';
import {Employee} from '../../../core/models/employee.model';
import {EmployeeService} from '../../../core/services/employee/employee.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  private clients: Customer[] = [];
  displayedColumns: string[] = ['id', 'ci', 'completName', 'phone', 'active', 'actions'];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.fetchClients();
  }

  fetchClients() {
    this.clientService.getAllClients().subscribe(clients => {
      this.clients = clients;
      console.log(clients);
    } );
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id)
      .subscribe(rta => {
        this.fetchClients();
      });
  }
}
