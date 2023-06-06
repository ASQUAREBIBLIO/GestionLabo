import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';

@Component({
  selector: 'app-editexpression',
  templateUrl: './editexpression.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class EditexpressionComponent {

  expressionbesoin!: IExpressionBesoin;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expressionService: ExpressionBesoinsService
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

  updateExpressionBesoins() {
    this.expressionService.updateExpressionBesoins(this.expressionbesoin).subscribe(
      response => {
        console.log('Needs expression updated successfully.');
        this.router.navigate(['/listexpression']);
        // Additional logic if needed
      },
      error => console.log(error)
    );
  }

}