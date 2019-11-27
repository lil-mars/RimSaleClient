import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Customer} from '../../models/customer.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  getAllClients() {
    return this.http.get<Customer[]>(`${environment.url_client}/index`);
  }

  getClient(id: number) {
    return this.http.get<Customer>(`${environment.url_client}/${id}`);
  }

  createClient(employee: Customer) {
    return this.http.post(`${environment.url_client}/create`, employee);
  }
  updateClient(id: number, changes: Partial<Customer> ) {
    return this.http.put(`${environment.url_client}/update/${id}`, changes);
  }

  deleteClient(id: number) {
    return this.http.delete(`${environment.url_client}/delete/${id}`);
  }

}
