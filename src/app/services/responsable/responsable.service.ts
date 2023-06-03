import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponsable } from '../../models/IResponsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  private baseUrl = 'http://localhost:8082/responsables'; // Replace with the actual API URL

  constructor(private http: HttpClient) { }

  getResponsables(): Observable<IResponsable[]> {
    return this.http.get<IResponsable[]>(this.baseUrl);
  }

  getResponsableById(responsableId: number): Observable<IResponsable> {
    const url = `${this.baseUrl}/${responsableId}`;
    return this.http.get<IResponsable>(url);
  }

  createResponsable(responsable: IResponsable): Observable<any> {
    return this.http.post(this.baseUrl, responsable);
  }

  updateResponsable(responsable: IResponsable): Observable<any> {
    const url = `${this.baseUrl}/${responsable.id}`;
    return this.http.put(url, responsable);
  }

  deleteResponsable(responsableId: number): Observable<any> {
    const url = `${this.baseUrl}/${responsableId}`;
    return this.http.delete(url);
  }
}
