import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getReservationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createReservation(reservation: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, reservation);
  }

  updateReservation(id: number, reservation: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, reservation);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
