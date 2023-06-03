import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjet } from '../../models/IProjet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private projetUrl = 'http://localhost:8082/projets';

  constructor(private http: HttpClient) {}

  getAllProjets(): Observable<IProjet[]> {
    return this.http.get<IProjet[]>(this.projetUrl);
  }

  getProjetById(id: number): Observable<IProjet> {
    return this.http.get<IProjet>(`${this.projetUrl}/${id}`);
  }

  createProjet(projet: IProjet): Observable<IProjet> {
    return this.http.post<IProjet>(this.projetUrl, projet);
  }

  updateProjet(id: number, projet: IProjet): Observable<IProjet> {
    return this.http.put<IProjet>(`${this.projetUrl}/${id}`, projet);
  }

  deleteProjet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.projetUrl}/${id}`);
  }
}
