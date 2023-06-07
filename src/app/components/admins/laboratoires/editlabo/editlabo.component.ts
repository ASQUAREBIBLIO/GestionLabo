import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEtablissement } from 'src/app/models/IEtablissement';
import { ILaboratoire } from 'src/app/models/ILaboratoire';
import { EtablissementService } from 'src/app/services/etablissement/etablissement.service';
import { LaboratoireService } from 'src/app/services/laboratoire/laboratoire.service';

@Component({
  selector: 'app-editlabo',
  templateUrl: './editlabo.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],

})
export class EditlaboComponent implements OnInit {
  laboratoire!: ILaboratoire;
  etablissements: IEtablissement[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private laboratoireService: LaboratoireService,
    private etablissementService: EtablissementService
  ) { }

  ngOnInit() {
    this.getLaboratoireById();
    this.getEtablissements();
  }

  getLaboratoireById(){
    const laboratoireId = this.route.snapshot.paramMap.get('id');
    if (laboratoireId !== null) {
      const id = Number(laboratoireId);
      this.laboratoireService.getLaboratoireById(id).subscribe(
        response => {
          this.laboratoire = response;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  getLaboratoire(laboratoireId: number) {
    this.laboratoireService.getLaboratoireById(laboratoireId).subscribe(
      laboratoire => this.laboratoire = laboratoire,
      error => console.log(error)
    );
  }

  
  updateLaboratoire() {
    this.laboratoireService.updateLaboratoire(this.laboratoire).subscribe(
      response => {
        console.log('laboratoire updated successfully.');
        this.router.navigate(['/admin/dashboard/laboratoires']);
        // Additional logic if needed
      },
      error => console.log(error)
    );
  }

  getEtablissements() {
    this.etablissementService.getEtablissements().subscribe(
      response => {
       this.etablissements = response;
      },
      error => {
        console.log('Error fetching admins:', error);
      }
    );
  }
  
}
