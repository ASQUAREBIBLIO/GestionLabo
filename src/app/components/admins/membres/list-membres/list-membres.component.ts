import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILaboratoire } from 'src/app/models/ILaboratoire';
import { IMembre } from 'src/app/models/IMembre';
import { LaboratoireService } from 'src/app/services/laboratoire/laboratoire.service';
import { MembreService } from 'src/app/services/membre/membre.service';

@Component({
  selector: 'app-list-membres',
  templateUrl: './list-membres.component.html',
  styleUrls: ['../../../../vendors/styles/style.css',
     '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css',
     '../../../../vendors/styles/core.css',
     '../../../../vendors/styles/icon-font.min.css'],
  
})
export class ListMembresComponent {
  membres!: IMembre[];
  laboratoires!: ILaboratoire[];
  SelectedMembre!: IMembre;

  totalExpression: any;

    constructor(private membreService: MembreService,
      private laboratoireService: LaboratoireService,
      private router: Router) { }

    ngOnInit() {
      this.getMembres();
      this.getLaboratoires();
    }

    getMembres() {
      this.membreService.getAllMembres().subscribe(
        response => {
          this.membres = response;
        },
        error => {
          console.log('Error fetching membres:', error);
        }
      );
    }

    setMembreAsDirector(membreId: number) {
      this.membreService.setMembreAsDirector(membreId, true).subscribe(
        response => {
          
        }
      )
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

    OpenMembreDetailsModal(membre: IMembre){
      this.SelectedMembre = membre;
    }

    createMembre(membre: IMembre) {
      this.membreService.createMembre(membre).subscribe(
        response => {
          console.log('Projet created successfully.');
          // Refresh projets list
          this.getMembres();
        },
        error => console.log(error)
      );
    }

    editMembre(membreId: number) {
      this.router.navigate(['/admin/dashboard/membres/edit', membreId]);
    }


    deleteMembre(id: number) {
      if (confirm('Are you sure you want to delete this membre?')) {
        this.membreService.deleteMembre(id).subscribe(
          () => {
            this.getMembres();
          },
          error => {
            console.log('Error deleting membre:', error);
          }
        );
      }
    }

    getTotalExpression() {
      this.membreService.getSumExpressions(this.SelectedMembre.id!)
        .subscribe(
          response => {
            this.totalExpression = response;
            // Handle the received data as needed
          },
          error => {
            console.error('Error fetching total expression:', error);
          }
        );
    }
}
