import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { EtablissementService } from 'src/app/services/etablissement/etablissement.service';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';
import { LaboratoireService } from 'src/app/services/laboratoire/laboratoire.service';
import { MembreService } from 'src/app/services/membre/membre.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../vendors/styles/style.css', '../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../vendors/styles/core.css','../../../vendors/styles/icon-font.min.css'],
  
})
export class DashboardComponent {

  expressionV: IExpressionBesoin[] = [];
  expressionInv: IExpressionBesoin[] = [];

  lengthV: number = 0;
  lengthInv: number = 0;

  constructor( 
    private etablissementService: EtablissementService,
    private membreService: MembreService,
    private laboratoireService: LaboratoireService,
    private expressionBesoinService: ExpressionBesoinsService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
   this.getValidExpressions();
   this.getInvalidExpressions();
  }

  getValidExpressions() {
    this.expressionBesoinService.getValidExpression().subscribe(
      response => {
        this.lengthV = response.length;
        this.expressionV = response.slice(0, 15).sort((a, b) => { return b.id! - a.id!});
      }
    )
  }

  getInvalidExpressions(){
    this.expressionBesoinService.getInvalidExpression().subscribe(
      response => {
        this.lengthInv = response.length;
        this.expressionInv = response.slice(0, 15).sort((a, b) => { return b.id! - a.id!});;
      }
    )
  }

}