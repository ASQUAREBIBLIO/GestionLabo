import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILaboratoire } from 'src/app/models/ILaboratoire';
import { IMembre } from 'src/app/models/IMembre';
import { LaboratoireService } from 'src/app/services/laboratoire/laboratoire.service';
import { MembreService } from 'src/app/services/membre/membre.service';

@Component({
  selector: 'app-edit-membre',
  templateUrl: './edit-membre.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],

})
export class EditMembreComponent {
  
  membre!: IMembre;
  laboratoires: ILaboratoire[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private membreService: MembreService,
    private laboratoireService: LaboratoireService
  ) { }

  ngOnInit() {
    this.getMembreById();
    this.getLaboratoires();
  }

  getMembreById(){
    const membreId = this.route.snapshot.paramMap.get('id');
    if (membreId !== null) {
      const id = Number(membreId);
      this.membreService.getMembreById(id).subscribe(
        response => {
          this.membre = response;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  getMembre(laboratoireId: number) {
    this.membreService.getMembreById(laboratoireId).subscribe(
      response => this.membre = response,
      error => console.log(error)
    );
  }
  
  updateMembre() {
    this.membreService.updateMembre(this.membre).subscribe(
      response => {
        console.log('Membre updated successfully.');
        this.router.navigate(['/admin/dashboard/membres']);
        // Additional logic if needed
      },
      error => console.log(error)
    );
  }

  getLaboratoires() {
    this.laboratoireService.getLaboratoires().subscribe(
      response => {
       this.laboratoires = response;
      },
      error => {
        console.log('Error fetching laboratoires:', error);
      }
    );
  }
  
}

