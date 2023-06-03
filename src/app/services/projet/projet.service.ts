import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjet } from 'src/app/models/IProjet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private membresUrl = 'http://localhost:8082/projets';

  constructor(private http: HttpClient) {}

  getAllProjets(): Observable<IProjet[]> {
    return this.http.get<IProjet[]>(this.membresUrl);
  }

  getProjetById(id: number): Observable<IProjet> {
    return this.http.get<IProjet>(`${this.membresUrl}/${id}`);
  }

  createProjet(membre: IProjet): Observable<IProjet> {
    return this.http.post<IProjet>(this.membresUrl, membre);
  }

  updateProjet(id: number, membre: IProjet): Observable<IProjet> {
    return this.http.put<IProjet>(`${this.membresUrl}/${id}`, membre);
  }

  deleteProjet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.membresUrl}/${id}`);
  }
}
