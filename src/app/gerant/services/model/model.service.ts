import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import {Model} from '../../models/model';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>(this.apiUrl);
  }

  getModelById(id: number): Observable<Model> {
    return this.http.get<Model>(`${this.apiUrl}/${id}`);
  }

  createModel(Model: Model): Observable<Model> {
    return this.http.post<Model>(this.apiUrl+"modeles", Model);
  }

  updateModel(id: number, Model: Model): Observable<Model> {
    return this.http.put<Model>(`${this.apiUrl}/${id}`, Model);
  }

  deleteModel(id: number): Observable<Model> {
    return this.http.delete<Model>(`${this.apiUrl}/${id}`);
  }
}
