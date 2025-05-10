import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import {Marque} from '../../models/marque';

@Injectable({
  providedIn: 'root',
})
export class MarqueService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMarques(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.apiUrl+"marques/findAllMarques");
  }

  getMarqueById(id: number): Observable<Marque> {
    return this.http.get<Marque>(`${this.apiUrl}/${id}`);
  }

  createMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(this.apiUrl+"marques", marque);
  }

  updateMarque(id: number, marque: Marque): Observable<Marque> {
    return this.http.put<Marque>(`${this.apiUrl}/${id}`, marque);
  }

  deleteMarque(id: number): Observable<Marque> {
    return this.http.delete<Marque>(`${this.apiUrl}/${id}`);
  }
}
