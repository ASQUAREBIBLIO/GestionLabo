import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEtablissement } from 'src/app/models/IEtablissement';
import { EtablissementService } from 'src/app/services/etablissement/etablissement.service';



@Component({
  selector: 'app-editetablissement',
  templateUrl: './editetablissement.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class EditetablissementComponent implements OnInit {
  etablissement!: IEtablissement;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etablissementService: EtablissementService
  ) { }

  ngOnInit() {
    const etablissementId = this.route.snapshot.paramMap.get('id');
    if (etablissementId !== null) {
      const id = Number(etablissementId);
      this.etablissementService.getEtablissementById(id).subscribe(
        etablissement => {
          this.etablissement = etablissement;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  loadEtablissement(etablissementId: number) {
    this.etablissementService.getEtablissementById(etablissementId).subscribe(
      etablissement => this.etablissement = etablissement,
      error => console.log(error)
    );
  }

  
  updateEtablissement() {
    this.etablissementService.updateEtablissement(this.etablissement).subscribe(
      response => {
        console.log('Etablissement updated successfully.');
        this.router.navigate(['/listetablissement']);
        // Additional logic if needed
      },
      error => console.log(error)
    );
  }
  
}