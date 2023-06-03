import { Component } from '@angular/core';
import { ResponsableService } from '../../services/responsable/responsable.service';
import { IResponsable } from '../../models/IResponsable';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent {
  responsables: IResponsable[] = [];

  constructor(private responsableService: ResponsableService) { }

  ngOnInit() {
    this.loadResponsables();
  }

  loadResponsables() {
    this.responsableService.getResponsables().subscribe(
      responsables => this.responsables = responsables,
      error => console.log(error)
    );
  }

  createResponsable(responsable: IResponsable) {
    this.responsableService.createResponsable(responsable).subscribe(
      response => {
        console.log('Responsable created successfully.');
        // Refresh responsables list
        this.loadResponsables();
      },
      error => console.log(error)
    );
  }

  updateResponsable(responsable: IResponsable) {
    this.responsableService.updateResponsable(responsable).subscribe(
      response => {
        console.log('Responsable updated successfully.');
        // Refresh responsables list
        this.loadResponsables();
      },
      error => console.log(error)
    );
  }

  deleteResponsable(responsableId: number) {
    this.responsableService.deleteResponsable(responsableId).subscribe(
      response => {
        console.log('Responsable deleted successfully.');
        // Refresh responsables list
        this.loadResponsables();
      },
      error => console.log(error)
    );
  }
}
