import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';

@Injectable({
  providedIn: 'root'
})
export class ExpressionBesoinsService {
  private expressionUrl = 'http://localhost:8082/expressionBesoins';

  constructor(private http: HttpClient) {}

  getAllExpressionBesoins(): Observable<IExpressionBesoin[]> {
    return this.http.get<IExpressionBesoin[]>(this.expressionUrl);
  }

  getExpressionBesoinById(id: number): Observable<IExpressionBesoin> {
    return this.http.get<IExpressionBesoin>(`${this.expressionUrl}/${id}`);
  }

  createExpressionBesoins(expression: IExpressionBesoin): Observable<IExpressionBesoin> {
    return this.http.post<IExpressionBesoin>(this.expressionUrl, expression);
  }

  updateExpressionBesoins(id: number, expression: IExpressionBesoin): Observable<IExpressionBesoin> {
    return this.http.put<IExpressionBesoin>(`${this.expressionUrl}/${id}`, expression);
  }

  deleteExpressionBesoins(id: number): Observable<void> {
    return this.http.delete<void>(`${this.expressionUrl}/${id}`);
  }
}