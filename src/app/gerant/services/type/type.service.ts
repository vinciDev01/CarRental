import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from '../../models/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiUrl);
  }

  gettypeById(id: number): Observable<Type> {
    return this.http.get<Type>(`${this.apiUrl}/${id}`);
  }

  createType(type: Type): Observable<Type> {
    return this.http.post<Type>(this.apiUrl, type);
  }

  updateType(id: number, type: Type): Observable<Type> {
    return this.http.put<Type>(`${this.apiUrl}/${id}`, type);
  }

  deleteType(id: number): Observable<Type> {
    return this.http.delete<Type>(`${this.apiUrl}/${id}`);
  }
}
