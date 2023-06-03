import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMembre } from '../models/IMembre';
import { Observable } from 'rxjs';

@Injectable()
export class MembreService {

  private membresUrl: string;

  constructor(private http: HttpClient) {
    this.membresUrl = 'http://localhost:8082/membres';
  }

  public findAll(): Observable<IMembre[]> {
    return this.http.get<IMembre[]>(this.membresUrl);
  }

  public save(membre: IMembre) {
    return this.http.post<IMembre>(this.membresUrl, membre);
  }
}