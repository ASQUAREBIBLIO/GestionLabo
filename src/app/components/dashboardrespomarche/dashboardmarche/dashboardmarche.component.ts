import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { IMembre } from 'src/app/models/IMembre';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';
import { MembreService } from 'src/app/services/membre/membre.service';

@Component({
  selector: 'app-dashboardmarche',
  templateUrl: './dashboardmarche.component.html',
  styleUrls: ['../../../vendors/styles/style.css', '../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../vendors/styles/core.css','../../../vendors/styles/icon-font.min.css'],
})
export class DashboardmarcheComponent {

  expressionbesoins: IExpressionBesoin[] = [];
  authMembre!: IMembre;

  expressionBesoin: IExpressionBesoin = {
    montantApprox: 0,
    dateDem: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'),
    dateEffet: '',
    montantEffet: 0,
    isValid: false,
    membre: {
      id: 0,
      nom: '',
      prenom: '',
    },
    typeBesoin: {
      id: undefined,
      type: ''
    }
  };

  constructor(
    private membreService: MembreService,
    private expressionBesoinsService: ExpressionBesoinsService,
    private router: Router,
    private authService : AuthService,
    private expressionService: ExpressionBesoinsService

  ) { }

  ngOnInit() {
    this.getAuthMembre();
    this.loadExpressions();

  }

  getAuthMembre(){
   
    this.membreService.getMembreById(Number(localStorage.getItem('authId')?.split("+")[1])).subscribe(
      response => {
        this.authMembre = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  logout() {
    this.authService.logout();
  }

  loadExpressions() {
    this.expressionBesoinsService.getAllExpressionBesoins().subscribe(
      expressionbesoins => this.expressionbesoins = expressionbesoins,
      error => console.log(error)
    );
  }

  deleteExpressionBesoins(expressionId: number) {
    this.expressionBesoinsService.deleteExpressionBesoins(expressionId).subscribe(
      response => {
        console.log('Needs expression deleted successfully.');
        // Additional logic if needed
        this.loadExpressions();
      },
      error => console.log(error)
    );
  }
  editExpressionBesoins(expressionId: number) {
    this.router.navigate(['/expressionsbesoin/edit', expressionId]);
  }

  createExpressionBesoins() {
    const memberId = Number(localStorage.getItem('authId')?.split("+")[1]);
  
    if (!isNaN(memberId)) {
      this.membreService.getMembreById(memberId).subscribe(
        response => {
          this.expressionBesoin.membre = response;
  
          this.expressionService.createExpressionBesoins(this.expressionBesoin).subscribe(
            response => {
              console.log('Needs expression created successfully.');
              // Additional logic if needed
              this.router.navigate(['/listexpression']);
            },
            error => console.log(error)
          );
        },
        error => console.log(error)
      );
    } else {
      console.log('Invalid member ID.');
      // Handle the case when the member ID is not a valid number
    }
  }


}
