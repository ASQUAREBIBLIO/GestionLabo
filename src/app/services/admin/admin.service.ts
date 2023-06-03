import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from 'src/app/models/IAdmin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminUrl = 'http://localhost:8082/admin';

  constructor(private http: HttpClient) {}

  getAllAdmins(): Observable<IAdmin[]> {
    return this.http.get<IAdmin[]>(this.adminUrl);
  }

  getAdminById(id: number): Observable<IAdmin> {
    return this.http.get<IAdmin>(`${this.adminUrl}/${id}`);
  }

  createAdmin(admin: IAdmin): Observable<IAdmin> {
    return this.http.post<IAdmin>(this.adminUrl, admin);
  }

  updateAdmin(id: number, admin: IAdmin): Observable<IAdmin> {
    return this.http.put<IAdmin>(`${this.adminUrl}/${id}`, admin);
  }

  deleteAdmin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.adminUrl}/${id}`);
  }
}
