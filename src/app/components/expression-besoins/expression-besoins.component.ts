import { Component } from '@angular/core';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';

@Component({
  selector: 'app-expression-besoins',
  templateUrl: './expression-besoins.component.html',
  styleUrls: ['./expression-besoins.component.css']
})
export class ExpressionBesoinsComponent {
  expressions!: IExpressionBesoin[];

  constructor(private expressionBesoinsService: ExpressionBesoinsService) { }

  ngOnInit() {
    this.getExpressionBesoins();
  }

  getExpressionBesoins() {
    this.expressionBesoinsService.getAllExpressionBesoins().subscribe(
      response => {
        this.expressions = response;
      },
      error => {
        console.log('Error fetching expressions:', error);
      }
    );
  }

  createExpressionBesoins(expression: IExpressionBesoin) {
    this.expressionBesoinsService.createExpressionBesoins(expression).subscribe(
      response => {
        console.log('Projet created successfully.');
        // Refresh projets list
        this.getExpressionBesoins();
      },
      error => console.log(error)
    );
  }

  updateExpressionBesoins(expressionId: number, expression: IExpressionBesoin) {
    this.expressionBesoinsService.updateExpressionBesoins(expressionId, expression).subscribe(
      response => {
        console.log('Needs expression updated successfully.');
        // Refresh projets list
        this.getExpressionBesoins();
      },
      error => console.log(error)
    );
  }

  deleteExpressionBesoins(id: number) {
    if (confirm('Are you sure you want to delete this expression?')) {
      this.expressionBesoinsService.deleteExpressionBesoins(id).subscribe(
        () => {
          this.getExpressionBesoins();
        },
        error => {
          console.log('Error deleting expression:', error);
        }
      );
    }
  }
}
