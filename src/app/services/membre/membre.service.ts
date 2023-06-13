import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMembre } from '../../models/IMembre';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MembreService {

  private membresUrl = 'http://localhost:8082/membres';
  private valeur = true;

  constructor(private http: HttpClient) {}

  getAllMembres(): Observable<IMembre[]> {
    return this.http.get<IMembre[]>(this.membresUrl);
  }

  setMembreAsDirector(id: number, isDirector: boolean): Observable<IMembre> {
    return this.http.post<IMembre>(`${this.membresUrl}/${id}?isDirector=${isDirector}`, isDirector);
  }

  getMembreById(id: number): Observable<IMembre> {
    return this.http.get<IMembre>(`${this.membresUrl}/${id}`);
  }

  createMembre(membre: IMembre): Observable<IMembre> {
    return this.http.post<IMembre>(this.membresUrl, membre);
  }

  updateMembre(membre: IMembre): Observable<IMembre> {
    return this.http.put<IMembre>(`${this.membresUrl}/${membre.id}`, membre);
  }

  deleteMembre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.membresUrl}/${id}`);
  }

  getSumExpressions(id: number): Observable<any> {
    return this.http.get(`${this.membresUrl}/${id}/e/total`);
  }

}