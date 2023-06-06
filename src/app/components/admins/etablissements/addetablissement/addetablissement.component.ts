import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEtablissement } from 'src/app/models/IEtablissement';
import { EtablissementService } from 'src/app/services/etablissement/etablissement.service';

@Component({
  selector: 'app-addetablissement',
  templateUrl: 'addetablissement.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class AddetablissementComponent {
  etablissement: IEtablissement = {
    id: 0,
    nom: '',
    ville: '',
    adresse: '',
    admin: {
      id: 1,
      nom: '',
      prenom: '',
      email: '',
      password: '',
      role: null
    }
  };

  constructor(private etablissementService: EtablissementService , private router: Router) { }

  createEtablissement() {
    this.etablissementService.createEtablissement(this.etablissement).subscribe(
      response => {
        console.log('Etablissement created successfully.');
        // Additional logic if needed
        this.router.navigate(['/listetablissement']);
      },
      error => console.log(error)
    );
  }
}

