import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';

@Component({
  selector: 'app-addexpression',
  templateUrl: './addexpression.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class AddexpressionComponent {
  expressionBesoin: IExpressionBesoin = {
    montantApprox: 0,
    dateDem: new Date(),
    dateEffet: new Date(),
    montantEffet: new Date(),
    isValid: false,
    membre: {
      id: 1,
      nom: '',
      prenom: ''
    },
    responsable: {
      id: 1,
      nom: '',
      prenom: ''
    },
    type: null
  };


  constructor(
    private router: Router,
    private expressionService: ExpressionBesoinsService
  ) { }

  createExpressionBesoins() {
    this.expressionService.createExpressionBesoins(this.expressionBesoin).subscribe(
      response => {
        console.log('Needs expression created successfully.');
        // Additional logic if needed
        this.router.navigate(['/listexpression']);
      },
      error => console.log(error)
    );
  }
  

}
