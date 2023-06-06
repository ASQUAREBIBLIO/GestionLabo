import { Component } from '@angular/core';
import { ILaboratoire } from 'src/app/models/ILaboratoire';
import { LaboratoireService } from 'src/app/services/laboratoire/laboratoire.service';

@Component({
  selector: 'app-listlabo',
  templateUrl: './listlabo.component.html',
  styleUrls: ['./listlabo.component.css']
})
export class ListlaboComponent {
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
