import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEtablissement } from '../../models/IEtablissement';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private baseUrl = 'http://localhost:8082/etablissements'; // Replace with the actual API URL

  constructor(private http: HttpClient) { }

  getEtablissements(): Observable<IEtablissement[]> {
    return this.http.get<IEtablissement[]>(this.baseUrl);
  }

  getEtablissementById(etablissementId: number): Observable<IEtablissement> {
    const url = `${this.baseUrl}/${etablissementId}`;
    return this.http.get<IEtablissement>(url);
  }

  createEtablissement(etablissement: IEtablissement): Observable<any> {
    return this.http.post(this.baseUrl, etablissement);
  }

  updateEtablissement(etablissement: IEtablissement): Observable<any> {
    const url = `${this.baseUrl}/${etablissement.id}`;
    return this.http.put(url, etablissement);
  }

  deleteEtablissement(etablissementId: number): Observable<any> {
    const url = `${this.baseUrl}/${etablissementId}`;
    return this.http.delete(url);
  }
}
