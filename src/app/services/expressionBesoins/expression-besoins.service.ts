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

  /*updateExpressionBesoins(id: number, expression: IExpressionBesoin): Observable<IExpressionBesoin> {
    return this.http.put<IExpressionBesoin>(`${this.expressionUrl}/${id}`, expression);
  }*/

  updateExpressionBesoins(expression: IExpressionBesoin): Observable<any> {
    const url = `${this.expressionUrl}/${expression.id}`;
    return this.http.put(url, expression);
  }

  deleteExpressionBesoins(id: number): Observable<void> {
    return this.http.delete<void>(`${this.expressionUrl}/${id}`);
  }


  getValidExpressionBesoinsByType(): Observable<IExpressionBesoin[]> {
    const type = 'marche';
    return this.http.get<IExpressionBesoin[]>(`${this.expressionUrl}/${type}`);
  }

  getValidExpressionBesoinsByTypeFinance(): Observable<IExpressionBesoin[]> {
    const type = 'finance';
    return this.http.get<IExpressionBesoin[]>(`${this.expressionUrl}/${type}`);
  }

  getValidExpression(): Observable<IExpressionBesoin[]> {
    return this.http.get<IExpressionBesoin[]>(`${this.expressionUrl}/v`);
  }

  getInvalidExpression(): Observable<IExpressionBesoin[]> {
    return this.http.get<IExpressionBesoin[]>(`${this.expressionUrl}/inv`);
  }
}
