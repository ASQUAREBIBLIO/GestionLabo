import { Component } from '@angular/core';
import { IAdmin } from 'src/app/models/IAdmin';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../vendors/styles/style.css', '../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../vendors/styles/core.css','../../vendors/styles/icon-font.min.css']
})
export class AdminComponent {
  admins!: IAdmin[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getAdmins();
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