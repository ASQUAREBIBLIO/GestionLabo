import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMembre } from 'src/app/models/IMembre';
import { MembreService } from 'src/app/services/membre/membre.service';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../vendors/styles/style.css', '../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../vendors/styles/core.css','../../../vendors/styles/icon-font.min.css'],
})
export class DashboardComponent {

  expressionbesoins: IExpressionBesoin[] = [];
  authMembre!: IMembre;

  constructor(
    private membreService: MembreService,
    private expressionBesoinsService: ExpressionBesoinsService,
    private router: Router,
    private authService : AuthService
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
}
