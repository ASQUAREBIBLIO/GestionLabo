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
  private tokenKey: string = 'authId';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };

    return this.http.post('http://localhost:8082/login', loginData);
  }

  handleLoginResponse(response: any) {
    this.role = response.role;
    localStorage.setItem(this.tokenKey, response.token.split('+')[1]);
    this.loggedIn = true;
  }

  logout() {
    //free the local storage
    localStorage.removeItem(this.tokenKey);
    this.role = null;
    this.loggedIn = false;
  }

  getToken(): string | null {
    // Retrieve the token from local storage
    return localStorage.getItem(this.tokenKey);
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

  isDirector(){
    return this.role === "DIRECTOR";
  }
}
