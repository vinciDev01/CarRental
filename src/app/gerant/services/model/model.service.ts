import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MarqueService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMarques(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMarqueById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createMarque(marque: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, marque);
  }

  updateMarque(id: number, marque: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, marque);
  }
  
  deleteMarque(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
