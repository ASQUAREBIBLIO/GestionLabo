import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { IMembre } from 'src/app/models/IMembre';
import { ITypeBesoin } from 'src/app/models/ITypeBesoin';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';
import { TypeBesoinService } from 'src/app/services/typebesoin/type-besoin.service';


@Component({
  selector: 'app-addexpression',
  templateUrl: './addexpression.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class AddexpressionComponent {

  typebesoins: ITypeBesoin[] = [];

  slicedResults: any[] = [];
  typeLength: number = 0;
  eLength: number = 0;

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
    type: {
      id: 1,
      type: ''
    }
  };


  constructor(
    private router: Router,
    private expressionService: ExpressionBesoinsService,
    private typeBesoinService : TypeBesoinService
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

  getAllTypeBesoin() {
    this.typeBesoinService.getAllTypeBesoin().subscribe(
      response => {
        this.typeLength = response.length;
        this.slicedResults = response.slice(0, 5).sort((a, b) => { return b.id! - a.id!});;
        this.typebesoins = this.slicedResults;
      },
      error => {
        console.log('Error fetching admins:', error);
      }
    );
  }

}
