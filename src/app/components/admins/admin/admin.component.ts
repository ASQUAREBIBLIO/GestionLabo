import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAdmin } from 'src/app/models/IAdmin';
import {IEtablissement} from 'src/app/models/IEtablissement'
import { ILaboratoire } from 'src/app/models/ILaboratoire';
import { IMembre } from 'src/app/models/IMembre';
import { AdminService } from 'src/app/services/admin/admin.service';
import { EtablissementService } from 'src/app/services/etablissement/etablissement.service';
import { LaboratoireService } from 'src/app/services/laboratoire/laboratoire.service';
import { MembreService } from 'src/app/services/membre/membre.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../../vendors/styles/style.css', '../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../vendors/styles/core.css','../../../vendors/styles/icon-font.min.css'],
  

})
export class AdminComponent {
  admins!: IAdmin[];
  etablissements!: IEtablissement[];
  membres!: IMembre[];
  laboratoires!: ILaboratoire[];

  //Post
  etablissement: IEtablissement = {
    nom: '',
    ville: '',
    adresse: ''
  }


  photo1: any;
  assets: any;
  images: any;



  constructor(private adminService: AdminService, 
    private etablissementService: EtablissementService,
    private membreService: MembreService,
    private laboratoireService: LaboratoireService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAdmins();
    this.getEtablissements();
    this.getMembres();
    this.getLaboratoires();
  }

  getMembres() {
    this.membreService.getAllMembres().subscribe(
      response => {
        this.membres = response;
      },
      error => {
        console.log('Error fetching admins:', error);
      }
    );
  }

  getLaboratoires() {
    this.laboratoireService.getLaboratoires().subscribe(
      response => {
        this.laboratoires = response;
      },
      error => {
        console.log('Error fetching admins:', error);
      }
    );
  }

  getNbreOfMembers(laboratoire: ILaboratoire): number | undefined{
    return laboratoire.membres?.length;
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

  createEtablissement() {
    this.etablissementService.createEtablissement(this.etablissement).subscribe(
      response => {
        console.log('Etablissement created successfully.');
        // Additional logic if needed
        this.router.navigate(['admin/dashboard']);
      },
      error => console.log(error)
    );
  }

  getAdmins() {
    this.adminService.getAllAdmins().subscribe(
      response => {
        this.admins = response;
      },
      error => {
        console.log('Error fetching admins:', error);
      }
    );
  }

  createAdmin(membre: IAdmin) {
    this.adminService.createAdmin(membre).subscribe(
      response => {
        console.log('Projet created successfully.');
        // Refresh projets list
        this.getAdmins();
      },
      error => console.log(error)
    );
  }

  updateAdmin(membreId: number, admin: IAdmin) {
    this.adminService.updateAdmin(membreId, admin).subscribe(
      response => {
        console.log('Etablissement updated successfully.');
        // Refresh projets list
        this.getAdmins();
      },
      error => console.log(error)
    );
  }

  deleteAdmin(id: number) {
    if (confirm('Are you sure you want to delete this membre?')) {
      this.adminService.deleteAdmin(id).subscribe(
        () => {
          this.getAdmins();
        },
        error => {
          console.log('Error deleting adùin:', error);
        }
      );
    }
  }
}
