import { Component } from '@angular/core';
import { IEtablissement } from 'src/app/models/IEtablissement';
import { EtablissementService } from 'src/app/services/etablissement/etablissement.service';

@Component({
  selector: 'app-editetablissement',
  templateUrl: './editetablissement.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class EditetablissementComponent {
  constructor(private etablissementService: EtablissementService) { }

  updateEtablissement(etablissement: IEtablissement) {
    this.etablissementService.updateEtablissement(etablissement).subscribe(
      response => {
        console.log('Etablissement updated successfully.');
        // Additional logic if needed
      },
      error => console.log(error)
    );
  }

}
