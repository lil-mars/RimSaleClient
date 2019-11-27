import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaleOrder } from '../../models/sale-order.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/order/';
  }
  updateSale(rim: SaleOrder) {
    return this.http.put(this.url + 'update/' + rim, rim);
  }
  getSaleById(id: string) {
    return this.http.delete(this.url + id);
  }
  addSale(rim: SaleOrder) {
    return this.http.post(this.url + 'create', rim);
  }
  deleteSale(id: string) {
    return this.http.delete(this.url + 'delete/' + id);
  }
  getAllSales() {
    return this.http.get<SaleOrder[]>(this.url + 'index');
  }
}
