import { Component } from '@angular/core';
import { EtablissementService } from '../../services/etablissement.service';
import { IEtablissement } from '../../models/IEtablissement';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent {
  etablissements: IEtablissement[] = [];

  constructor(private etablissementService: EtablissementService) { }

  ngOnInit() {
    this.loadEtablissements();
  }

  loadEtablissements() {
    this.etablissementService.getEtablissements().subscribe(
      etablissements => this.etablissements = etablissements,
      error => console.log(error)
    );
  }

  createEtablissement(etablissement: IEtablissement) {
    this.etablissementService.createEtablissement(etablissement).subscribe(
      response => {
        console.log('Etablissement created successfully.');
        // Refresh etablissements list
        this.loadEtablissements();
      },
      error => console.log(error)
    );
  }

  updateEtablissement(etablissement: IEtablissement) {
    this.etablissementService.updateEtablissement(etablissement).subscribe(
      response => {
        console.log('Etablissement updated successfully.');
        // Refresh etablissements list
        this.loadEtablissements();
      },
      error => console.log(error)
    );
  }

  deleteEtablissement(etablissementId: number) {
    this.etablissementService.deleteEtablissement(etablissementId).subscribe(
      response => {
        console.log('Etablissement deleted successfully.');
        // Refresh etablissements list
        this.loadEtablissements();
      },
      error => console.log(error)
    );
  }
}
