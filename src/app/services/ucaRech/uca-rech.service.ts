import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUcaRech } from 'src/app/models/IUcaRech';

@Injectable({
  providedIn: 'root'
})
export class UcaRechService {
  private ucaRechUrl = 'http://localhost:8082/projets';

  constructor(private http: HttpClient) {}

  getAllProjets(): Observable<IUcaRech[]> {
    return this.http.get<IUcaRech[]>(this.ucaRechUrl);
  }

  getProjetById(id: number): Observable<IUcaRech> {
    return this.http.get<IUcaRech>(`${this.ucaRechUrl}/${id}`);
  }

  createProjet(ucaRech: IUcaRech): Observable<IUcaRech> {
    return this.http.post<IUcaRech>(this.ucaRechUrl, ucaRech);
  }

  updateProjet(id: number, ucaRech: IUcaRech): Observable<IUcaRech> {
    return this.http.put<IUcaRech>(`${this.ucaRechUrl}/${id}`, ucaRech);
  }

  deleteProjet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ucaRechUrl}/${id}`);
  }
}
