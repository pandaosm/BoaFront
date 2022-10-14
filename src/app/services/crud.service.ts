import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudOperations } from './crud-operations';

export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

  constructor(
    protected _http: HttpClient,
    protected _base: string
  ) {}

  save(t: T): Observable<T> {
    return this._http.post<T>(this._base+  "/client/client/", t);
  }

  update(t: T): Observable<T> {
    return this._http.put<T>(this._base + "/client/client/" , t);
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(this._base + '/client/client/${id}' );
  }

  findByCritaria(id : number): Observable<T[]> {
    debugger;
    return this._http.get<T[]>('/client/clients');
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this._base + '/client/clients');
  } 

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/client/client/${id}');
	}

}
