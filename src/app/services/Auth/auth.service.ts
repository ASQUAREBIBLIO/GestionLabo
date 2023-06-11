import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMembre } from 'src/app/models/IMembre';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
    localStorage.setItem(this.tokenKey, response.token);
  }

  logout() {
    //free the local storage
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    // Retrieve the token from local storage
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    if(this.getToken()){
      return true;
    } else return false;
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

  private currentMember!: IMembre;

  // Method to retrieve the ID of the current member
  getCurrentMemberId(): number | undefined {
    // Retrieve the ID from the current member object
    return this.currentMember.id;
  }
}
