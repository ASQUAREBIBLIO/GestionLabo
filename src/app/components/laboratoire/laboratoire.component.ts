import { Component } from '@angular/core';
import { LaboratoireService } from '../../services/laboratoire/laboratoire.service';
import { ILaboratoire } from '../../models/ILaboratoire';

@Component({
  selector: 'app-laboratoire',
  templateUrl: './laboratoire.component.html',
  styleUrls: ['./laboratoire.component.css']
})
export class LaboratoireComponent {
  laboratoires: ILaboratoire[] = [];

  constructor(private laboratoireService: LaboratoireService) { }

  ngOnInit() {
    this.loadLaboratoires();
  }

  loadLaboratoires() {
    this.laboratoireService.getLaboratoires().subscribe(
      laboratoires => this.laboratoires = laboratoires,
      error => console.log(error)
    );
  }

  createLaboratoire(laboratoire: ILaboratoire) {
    this.laboratoireService.createLaboratoire(laboratoire).subscribe(
      response => {
        console.log('Laboratoire created successfully.');
        // Refresh laboratoires list
        this.loadLaboratoires();
      },
      error => console.log(error)
    );
  }

  updateLaboratoire(laboratoire: ILaboratoire) {
    this.laboratoireService.updateLaboratoire(laboratoire).subscribe(
      response => {
        console.log('Laboratoire updated successfully.');
        // Refresh laboratoires list
        this.loadLaboratoires();
      },
      error => console.log(error)
    );
  }

  deleteLaboratoire(laboratoireId: number) {
    this.laboratoireService.deleteLaboratoire(laboratoireId).subscribe(
      response => {
        console.log('Laboratoire deleted successfully.');
        // Refresh laboratoires list
        this.loadLaboratoires();
      },
      error => console.log(error)
    );
  }
}
