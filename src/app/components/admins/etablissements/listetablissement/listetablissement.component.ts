import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEtablissement } from 'src/app/models/IEtablissement';
import { EtablissementService } from 'src/app/services/etablissement/etablissement.service';

@Component({
  selector: 'app-listetablissement',
  templateUrl: './listetablissement.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class ListetablissementComponent {
  etablissements: IEtablissement[] = [];

  constructor(
    private router: Router,
    private etablissementService: EtablissementService
  ) { }
  ngOnInit() {
    this.loadEtablissements();
  }

  loadEtablissements() {
    this.etablissementService.getEtablissements().subscribe(
      etablissements => this.etablissements = etablissements,
      error => console.log(error)
    );
  }

  deleteEtablissement(etablissementId: number) {
    this.etablissementService.deleteEtablissement(etablissementId).subscribe(
      response => {
        console.log('Etablissement deleted successfully.');
        // Additional logic if needed
        this.loadEtablissements();
      },
      error => console.log(error)
    );
  }
  editEtablissement(etablissementId: number) {
    this.router.navigate(['/etablissements/edit', etablissementId]);
  }
}


