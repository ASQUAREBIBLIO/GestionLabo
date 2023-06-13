import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDotation } from 'src/app/models/IDotation';

@Injectable({
  providedIn: 'root'
})
export class DotationService {

  private ucaUrl = 'http://localhost:8082/membres/dotations';

  constructor(private http: HttpClient) { }

  getAllDotationsUcaRech(): Observable<IDotation[]> {
    return this.http.get<IDotation[]>(this.ucaUrl);
  }
}
