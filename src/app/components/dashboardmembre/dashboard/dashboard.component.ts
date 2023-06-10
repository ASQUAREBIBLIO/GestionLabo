import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMembre } from 'src/app/models/IMembre';
import { MembreService } from 'src/app/services/membre/membre.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../vendors/styles/style.css', '../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../vendors/styles/core.css','../../../vendors/styles/icon-font.min.css'],
})
export class DashboardComponent {

  authMembre!: IMembre;

  constructor(
    private membreService: MembreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAuthMembre();
  }

  getAuthMembre(){
   
    this.membreService.getMembreById(Number(localStorage.getItem('authId'))).subscribe(
      response => {
        this.authMembre = response;
      },
      error => {
        console.log(error);
      }
    )
  }
}
