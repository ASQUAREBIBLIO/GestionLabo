import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILaboratoire } from '../../models/ILaboratoire';

@Injectable({
  providedIn: 'root'
})
export class LaboratoireService {
  private baseUrl = 'http://localhost:8082/laboratoires'; // Replace with the actual API URL

  constructor(private http: HttpClient) { }

  getLaboratoires(): Observable<ILaboratoire[]> {
    return this.http.get<ILaboratoire[]>(this.baseUrl);
  }

  getLaboratoireById(laboratoireId: number): Observable<ILaboratoire> {
    const url = `${this.baseUrl}/${laboratoireId}`;
    return this.http.get<ILaboratoire>(url);
  }

  createLaboratoire(laboratoire: ILaboratoire): Observable<any> {
    return this.http.post(this.baseUrl, laboratoire);
  }

  updateLaboratoire(laboratoire: ILaboratoire): Observable<any> {
    const url = `${this.baseUrl}/${laboratoire.id}`;
    return this.http.put(url, laboratoire);
  }

  deleteLaboratoire(laboratoireId: number): Observable<any> {
    const url = `${this.baseUrl}/${laboratoireId}`;
    return this.http.delete(url);
  }
}
