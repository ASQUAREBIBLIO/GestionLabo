import { Component } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;
  

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        this.authService.handleLoginResponse(response);
        if (this.authService.isAdmin()) {
          this.router.navigate(['/admin/dashboard']);
        } else if (this.authService.isMember()) {
          this.router.navigate(['/membre/dashboard']);
        }
      },
      (error) => {
        console.log(error);
        // Handle login error
      }
    );
  }
  // username!: string;
  // password!: string;
  // role!: string;

  // constructor(private http: HttpClient, private authService: AuthService , private router: Router ) {}
  

  // login() {
  //   const credentials = {
  //     username: this.username,
  //     password: this.password,
  //     role: this.role
  //   };

  //   this.authService.login(credentials).subscribe(
  //     response => {
  //       // Gérer la réponse de connexion réussie
  //       console.log('Connexion réussie');
  //       // Rediriger vers le tableau de bord approprié en fonction du rôle
  //       this.redirectToDashboard(this.role);
  //     },
  //     error => {
  //       // Gérer l'erreur de connexion
  //       console.error('Erreur de connexion', error);
  //     }
  //   );
  // }

  // redirectToDashboard(role: string) {
  //   // Rediriger vers le tableau de bord approprié en fonction du rôle
  //   let dashboardUrl = '';
  
  //   switch (role) {
  //     case 'admin':
  //       dashboardUrl = '/admin/dashboard';
  //       break;
  //     case 'directeur':
  //       dashboardUrl = '/directeur/dashboard';
  //       break;
  //     case 'membre':
  //       dashboardUrl = '/membre/dashboard';
  //       break;
  //     case 'responsable-marche':
  //       dashboardUrl = '/responsable-marche/dashboard';
  //       break;
  //     case 'responsable-finance':
  //       dashboardUrl = '/responsable-finance/dashboard';
  //       break;
  //     default:
  //       // Redirection par défaut en cas de rôle non reconnu
  //       dashboardUrl = '/login';
  //       break;
  //   }
  
  //   // Redirection vers le tableau de bord correspondant
  //   this.router.navigate([dashboardUrl]);
  // }
}
