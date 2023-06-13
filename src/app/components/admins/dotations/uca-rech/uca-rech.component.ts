import { Component } from '@angular/core';
import { IUcaRech } from 'src/app/models/IUcaRech';
import { IAdmin } from 'src/app/models/IAdmin';
import { UcaRechService } from 'src/app/services/ucaRech/uca-rech.service';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-uca-rech',
  templateUrl: './uca-rech.component.html',
  styleUrls: ['../../../../vendors/styles/style.css',
  '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css',
  '../../../../vendors/styles/core.css',
  '../../../../vendors/styles/icon-font.min.css'],
})
export class UcaRechComponent {
  ucaRechs!: IUcaRech[];
  authAdmin!: IAdmin;

  constructor(
    private ucaRechservice: UcaRechService,
    private adminService: AdminService
    ) { }

  ngOnInit() {
    this.getucaRechs();
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

  getucaRechs() {
    this.ucaRechservice.getAllUcaRech().subscribe(
      response => {
        this.ucaRechs = response;
      },
      error => {
        console.log('Error fetching ucaRechs:', error);
      }
    );
  }

  createucaRech(ucaRech: IUcaRech) {
    this.ucaRechservice.createUcaRech(ucaRech).subscribe(
      response => {
        console.log('Projet created successfully.');
        // Refresh projets list
        this.getucaRechs();
      },
      error => console.log(error)
    );
  }

  updateucaRech(ucaRechId: number, ucaRech: IUcaRech) {
    this.ucaRechservice.updateUcaRech(ucaRechId, ucaRech).subscribe(
      response => {
        console.log('Etablissement updated successfully.');
        // Refresh projets list
        this.getucaRechs();
      },
      error => console.log(error)
    );
  }

  deleteucaRech(id: number) {
    if (confirm('Are you sure you want to delete this ucaRech?')) {
      this.ucaRechservice.deleteUcaRech(id).subscribe(
        () => {
          this.getucaRechs();
        },
        error => {
          console.log('Error deleting ucaRech:', error);
        }
      );
    }
  }
}
