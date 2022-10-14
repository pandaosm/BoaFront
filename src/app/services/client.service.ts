import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './crud.service';
import { Router } from '@angular/router';
import { Client } from '../entites/client';

const baseUrl = 'http://localhost:8089';

@Injectable({
  providedIn: 'root'
})
export class ClientService  extends CrudService<Client,number>{

  constructor(private http : HttpClient,private router : Router) {
    super(http , baseUrl);
  }
}
    /*{

  constructor(private http: HttpClient) { }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(baseUrl);
  }

  get(id: any): Observable<Client> {
    return this.http.get<Client>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Client[]> {
    return this.http.get<Client[]>(`${baseUrl}?title=${title}`);
  }
}*/

