import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IAdmin } from 'src/app/models/IAdmin';
import { IDotation } from 'src/app/models/IDotation';
import {IEtablissement} from 'src/app/models/IEtablissement'
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { ILaboratoire } from 'src/app/models/ILaboratoire';
import { IMembre } from 'src/app/models/IMembre';
import { IUcaRech } from 'src/app/models/IUcaRech';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { DotationService } from 'src/app/services/dotations/dotation.service';
import { EtablissementService } from 'src/app/services/etablissement/etablissement.service';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';
import { LaboratoireService } from 'src/app/services/laboratoire/laboratoire.service';
import { MembreService } from 'src/app/services/membre/membre.service';
import { UcaRechService } from 'src/app/services/ucaRech/uca-rech.service';


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
  expressions: IExpressionBesoin[] = [];
  dotations: IDotation[] = [];
  membreDotations!: IMembre;
  ucaRechDotation!: IUcaRech;

  slicedResults: any[] = [];
  membresLength: number = 0;
  laboLength: number = 0;
  eLength: number = 0;

  authAdmin!: IAdmin;

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
    director: false,
    laboratoire:{
      id: undefined
    },
    admin: {
      id: 0
    },
    expressionBesoins: undefined
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
    private expressionBesoinService: ExpressionBesoinsService,
    private dotationService: DotationService,
    private ucaRechService: UcaRechService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAdmins();
    this.getEtablissements();
    this.getMembres();
    this.getLaboratoires();
    this.getAuthAdmin();
    this.getDotationsMembres();
    this.getValidExpressions();
  }

  getValidExpressions() {
    this.expressionBesoinService.getValidExpression().subscribe(
      response => {
        this.expressions = response.slice(0, 10).sort((a, b) => { return b.id! - a.id!});;
      }
    )
  }

  getDotationsMembres() {
    this.dotationService.getAllDotationsUcaRech().subscribe(
      response => {
        this.dotations = response;
        this.dotations.forEach(dotation => {
          this.membreService.getMembreById(dotation.id.membreId).subscribe(m => this.membreDotations = m);
          this.ucaRechService.getUcaRechById(dotation.id.ucaRechId).subscribe(uca => this.ucaRechDotation = uca);
        })
      }
    )
  }

  getMembres() {
    this.membreService.getAllMembres().subscribe(
      response => {
        this.membresLength = response.length;
        this.slicedResults = response.slice(0, 15).sort((a, b) => { return b.id! - a.id!});
        this.membres = this.slicedResults;
      },
      error => {
        console.log('Error fetching admins:', error);
      }
    );
  }

  setMembreAsDirector(membreId: number) {
    this.membreService.setMembreAsDirector(membreId, true).subscribe(
      response => {

      }
    )
  }

  createMembre(membreForm: NgForm) {
    this.membreService.createMembre(this.membre).subscribe(
      response => {
        alert("Nouveau membre est enregistré avec succès !")
        window.location.reload();
      },
      error => console.log(error)
    );
  }

  getLaboratoires() {
    this.laboratoireService.getLaboratoires().subscribe(
      response => {
        this.laboLength = response.length;
        this.slicedResults = response.slice(0, 5).sort((a, b) => { return b.id! - a.id!});;
        this.laboratoires = this.slicedResults;
      },
      error => {
        console.log('Error fetching admins:', error);
      }
    );
  }

  deleteMembre(id: number) {
    if (confirm('Are you sure you want to delete this membre?')) {
      this.membreService.deleteMembre(id).subscribe(
        () => {
          alert("Supprimé avec succès !")
          this.getMembres();
        },
        error => {
          console.log('Error deleting membre:', error);
        }
      );
    }
  }

  createLaboratoire(laboratoireForm: NgForm) {
    this.laboratoireService.createLaboratoire(this.laboratoire).subscribe(
      response => {
        alert("Nouveau laboratoire est créé avec succès !");
        window.location.reload();
      },
      error => console.log(error)
    );
  }

  updateLaboratoire() {
    this.laboratoireService.updateLaboratoire(this.laboratoire).subscribe(
      response => {
        console.log('Laboratoire updated successfully.');
        this.router.navigate(['/admin/dashboard']);
        // Additional logic if needed
      },
      error => console.log(error)
    );
  }

  editLabo(laboratoireId: number) {
    this.router.navigate(['/admin/dashboard/lab/edit', laboratoireId]);
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

  deleteLaboratoire(id: number) {
    if (confirm('Are you sure you want to delete this laboratory?')) {
      this.laboratoireService.deleteLaboratoire(id).subscribe(
        () => {
          alert("Supprimé avec succès !")
          this.getLaboratoires();
        },
        error => {
          console.log('Error deleting laboratory:', error);
        }
      );
    }
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
        this.eLength = response.length;
        this.slicedResults = response.slice(0, 5).sort((a, b) => { return b.id! - a.id!});;
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
        alert("Nouvelle établissement est ajoutée avec succès !");
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
    if (confirm('Are you sure you want to delete this Etablissement?')) {
      this.etablissementService.deleteEtablissement(etablissementId).subscribe(
        response => {
          alert("Supprimé avec succès !")
          this.getEtablissements();
        },
        error => console.log(error)
      );
    }
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

  getAuthAdmin(){
   
    this.adminService.getAdminById(Number(localStorage.getItem('authId')?.split("+")[1])).subscribe(
      response => {
        this.authAdmin = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  logout() {
    this.authService.logout();
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
