import { Component } from '@angular/core';
import { IEtablissement } from 'src/app/models/IEtablissement';
import { EtablissementService } from 'src/app/services/etablissement/etablissement.service';

@Component({
  selector: 'app-addetablissement',
  templateUrl: './addetablissement.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class AddetablissementComponent {
  constructor(private etablissementService: EtablissementService) { }

  createEtablissement(etablissement: IEtablissement) {
    this.etablissementService.createEtablissement(etablissement).subscribe(
      response => {
        console.log('Etablissement created successfully.');
        // Additional logic if needed
      },
      error => console.log(error)
    );
  }

}
