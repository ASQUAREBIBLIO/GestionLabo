import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private role!: string | null;
  private id!: number;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };

    return this.http.post('http://localhost:8082/login', loginData);
  }

  handleLoginResponse(response: any) {
    this.role = response.role;
    localStorage.setItem('authId', response.token.split('+')[1]);
    this.loggedIn = true;
  }

  logout() {
    this.role = null;
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  isAdmin() {
    return this.role === "ADMIN";
  }

  isMember() {
    return this.role === "MEMBRE";
  }
}
