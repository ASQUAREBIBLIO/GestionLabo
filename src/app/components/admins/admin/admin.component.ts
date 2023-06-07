import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  admins: IAdmin[] = [];
  etablissements: IEtablissement[] = [];
  membres: IMembre[] = [];
  laboratoires: ILaboratoire[] = [];

  slicedResults: any[] = [];

  //Post
  etablissement: IEtablissement = {
    nom: '',
    ville: '',
    adresse: ''
  }
  laboratoire: ILaboratoire = {
    nomLabo: '',
    etablissement: {
     id: undefined
    }
  }
  membre: IMembre = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: null,
    director: false,
    laboratoire:{
      id: undefined
    }
  }

  //By id
  SelectedLaboratoire!: ILaboratoire;
  SelectedEtablissement!: IEtablissement;
  SelectedMembre!: IMembre;


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
        this.slicedResults = response.slice(0, 15);
        this.membres = this.slicedResults;
      },
      error => {
        console.log('Error fetching admins:', error);
      }
    );
  }

  createMembre(membreForm: NgForm) {
    this.membreService.createMembre(this.membre).subscribe(
      response => {
        console.log('Etablissement created successfully.');
        membreForm.reset();
        // Reload the page
        window.location.reload();
      },
      error => console.log(error)
    );
  }

  getLaboratoires() {
    this.laboratoireService.getLaboratoires().subscribe(
      response => {
        this.slicedResults = response.slice(0, 5);
        this.laboratoires = this.slicedResults;
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

  getLaboratoireById(laboratoireId: number){
    this.laboratoireService.getLaboratoireById(laboratoireId).subscribe(
      response => {
        this.laboratoire = response;
      },
      error => {
        console.log('Error fetching laboratory:', error);
      }
    )
  }

  OpenEtablissementDetailsModal(etablissement: IEtablissement){
    this.SelectedEtablissement = etablissement;
  }

  OpenLaboratoireDetailsModal(laboratoire: ILaboratoire){
    this.SelectedLaboratoire = laboratoire;
  }
  OpenMembreDetailsModal(membre: IMembre){
    this.SelectedMembre = membre;
  }

  getNbreOfMembers(laboratoire: ILaboratoire): number | undefined{
    return laboratoire.membres?.length;
  }

  getEtablissements() {
    this.etablissementService.getEtablissements().subscribe(
      response => {
        this.slicedResults = response.slice(0, 5);
        this.etablissements = this.slicedResults;
      },
      error => {
        console.log('Error fetching admins:', error);
      }
    );
  }

  createEtablissement(etabForm: NgForm) {
    this.etablissementService.createEtablissement(this.etablissement).subscribe(
      response => {
        console.log('Etablissement created successfully.');
        etabForm.reset();
        // Reload the page
        window.location.reload();
      },
      error => console.log(error)
    );
  }

  updateEtablissement() {
    this.etablissementService.updateEtablissement(this.etablissement).subscribe(
      response => {
        console.log('Etablissement updated successfully.');
        this.router.navigate(['/admin/dashboard']);
        // Additional logic if needed
      },
      error => console.log(error)
    );
  }

  editEtab(etablissementId: number) {
    this.router.navigate(['/admin/dashboard/e/edit', etablissementId]);
  }

  deleteEtablissement(etablissementId: number) {
    this.etablissementService.deleteEtablissement(etablissementId).subscribe(
      response => {
        console.log('Etablissement deleted successfully.');
        // Additional logic if needed
        this.getEtablissements();
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
