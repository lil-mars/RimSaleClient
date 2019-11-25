import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rim } from '../../models/rim.model';
@Injectable({
  providedIn: 'root'
})
export class RimService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/rim/';
  }
  updateRim(rim: Rim) {
    return this.http.put(this.url + 'update/' + rim.id, rim);
  }
  getRimById(id: string) {
    return this.http.delete(this.url + id);
  }
  addRim(rim: Rim) {
    return this.http.post(this.url + 'create', rim);
  }
  deleteRim(id: string) {
    return this.http.delete(this.url + 'delete/' + id);
  }
  getAllRims() {
    return this.http.get<Rim[]>(this.url + 'index');
  }
}
