import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';


@Component({
  selector: 'app-listexpression',
  templateUrl: './listexpression.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class ListexpressionComponent {
  expressionbesoins: IExpressionBesoin[] = [];

  constructor(
    private router: Router,
    private expressionBesoinsService: ExpressionBesoinsService
  ) { }

  ngOnInit() {
    this.loadExpressions();
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
