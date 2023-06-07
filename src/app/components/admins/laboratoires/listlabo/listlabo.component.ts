import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IEtablissement } from 'src/app/models/IEtablissement';
import { ILaboratoire } from 'src/app/models/ILaboratoire';
import { EtablissementService } from 'src/app/services/etablissement/etablissement.service';
import { LaboratoireService } from 'src/app/services/laboratoire/laboratoire.service';

@Component({
  selector: 'app-listlabo',
  templateUrl: './listlabo.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class ListlaboComponent {
  laboratoires: ILaboratoire[] = [];
  etablissements: IEtablissement[] = [];
  laboratoire: ILaboratoire = {
    nomLabo: '',
    etablissement: {
     id: undefined
    }
  }

  constructor(private laboratoireService: LaboratoireService,
    private etablissementService: EtablissementService,
     private router: Router) { }

  ngOnInit() {
    this.loadLaboratoires();
    this.getEtablissements();
  }

  loadLaboratoires() {
    this.laboratoireService.getLaboratoires().subscribe(
      laboratoires => this.laboratoires = laboratoires,
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

  createLaboratoire(laboratoireForm: NgForm) {
    this.laboratoireService.createLaboratoire(this.laboratoire).subscribe(
      response => {
        console.log('Etablissement created successfully.');
        laboratoireForm.reset();
        // Reload the page
        window.location.reload();
        
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
