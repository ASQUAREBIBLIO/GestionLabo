import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { IMembre } from 'src/app/models/IMembre';
import { MembreService } from 'src/app/services/membre/membre.service';

@Component({
  selector: 'app-editexpbesoin',
  templateUrl: './editexpbesoin.component.html',
  styleUrls: ['../../../vendors/styles/style.css', '../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../vendors/styles/core.css','../../../vendors/styles/icon-font.min.css'],
})

export class EditexpbesoinComponent {

  expressionbesoin!: IExpressionBesoin;
  authMembre!: IMembre;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expressionService: ExpressionBesoinsService,
    private authService: AuthService,
    private membreService: MembreService


  ) { }

  ngOnInit() {
    const expressionId = this.route.snapshot.paramMap.get('id');
    if (expressionId !== null) {
      const id = Number(expressionId);
      this.expressionService.getExpressionBesoinById(id).subscribe(
        expressionbesoin=> {
          this.expressionbesoin= expressionbesoin;
        },
        error => {
          console.log(error);
        }
      );
    }
    this.getAuthMembre();

  }

  loadExpression(expressionId: number) {
    this.expressionService.getExpressionBesoinById(expressionId).subscribe(
      expressionbesoin=> this.expressionbesoin= expressionbesoin,
      error => console.log(error)
    );
  }


  /*updateExpressionBesoins(expressionId: number, expression: IExpressionBesoin) {
    this.expressionService.updateExpressionBesoins(expressionId, expression).subscribe(
      response => {
        console.log('Needs expression updated successfully.');
        // Refresh projets list
        this.getAllExpressionBesoins();
      },
      error => console.log(error)
    );
  }*/

  // updateExpressionBesoins() {
  //   this.expressionService.updateExpressionBesoins(this.expressionbesoin).subscribe(
  //     response => {
  //       console.log('Needs expression updated successfully.');
  //       this.router.navigate(['/listexpression']);
  //       // Additional logic if needed
  //     },
  //     error => console.log(error)
  //   );
  // }

  updateExpressionBesoins() {
    // const memberId = Number(localStorage.getItem('authId')?.split("+")[1]);
  
    // if (!isNaN(memberId)) {
    //   this.membreService.getMembreById(memberId).subscribe(
    //     response => {
    //       this.expressionbesoin.membre = response;
  
          
    //     },
    //     error => console.log(error)
    //   );
    // } else {
    //   console.log('Invalid member ID.');
    //   // Handle the case when the member ID is not a valid number
    // }
    this.expressionService.updateExpressionBesoins(this.expressionbesoin).subscribe(
      response => {
        console.log('Needs expression updated successfully.');
        this.router.navigate(['/respomarche/dashboard']);
        // Additional logic if needed
      },
      error => console.log(error)
    );
  }

  logout() {
    this.authService.logout();
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

}
