import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MembreGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn() && this.authService.isMember()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
