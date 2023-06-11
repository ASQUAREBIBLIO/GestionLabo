import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITypeBesoin } from 'src/app/models/ITypeBesoin';

@Injectable({
  providedIn: 'root'
})
export class TypeBesoinService {
  private expressionUrl = 'http://localhost:8082/typebesoins';

  constructor(private http: HttpClient) {}

  getAllTypeBesoin(): Observable<ITypeBesoin[]> {
    return this.http.get<ITypeBesoin[]>(this.expressionUrl);
  }

  getTypeBesoinById(id: number): Observable<ITypeBesoin> {
    return this.http.get<ITypeBesoin>(`${this.expressionUrl}/${id}`);
  }

  createTypeBesoin(expression: ITypeBesoin): Observable<ITypeBesoin> {
    return this.http.post<ITypeBesoin>(this.expressionUrl, expression);
  }

  /*updateExpressionBesoins(id: number, expression: ITypeBesoin): Observable<ITypeBesoin> {
    return this.http.put<ITypeBesoin>(`${this.expressionUrl}/${id}`, expression);
  }*/

  updateTypeBesoin(expression: ITypeBesoin): Observable<any> {
    const url = `${this.expressionUrl}/${expression.type}`;
    return this.http.put(url, expression);
  }

  deleteExpressionBesoins(id: number): Observable<void> {
    return this.http.delete<void>(`${this.expressionUrl}/${id}`);
  }
}
