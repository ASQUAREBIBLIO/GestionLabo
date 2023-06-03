import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUcaRech } from '../../models/IUcaRech';

@Injectable({
  providedIn: 'root'
})
export class UcaRechService {
  private ucaRechUrl = 'http://localhost:8082/dotations/UcaRecherche';

  constructor(private http: HttpClient) {}

  getAllUcaRech(): Observable<IUcaRech[]> {
    return this.http.get<IUcaRech[]>(this.ucaRechUrl);
  }

  getUcaRechById(id: number): Observable<IUcaRech> {
    return this.http.get<IUcaRech>(`${this.ucaRechUrl}/${id}`);
  }

  createUcaRech(ucaRech: IUcaRech): Observable<IUcaRech> {
    return this.http.post<IUcaRech>(this.ucaRechUrl, ucaRech);
  }

  updateUcaRech(id: number, ucaRech: IUcaRech): Observable<IUcaRech> {
    return this.http.put<IUcaRech>(`${this.ucaRechUrl}/${id}`, ucaRech);
  }

  deleteUcaRech(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ucaRechUrl}/${id}`);
  }
}
