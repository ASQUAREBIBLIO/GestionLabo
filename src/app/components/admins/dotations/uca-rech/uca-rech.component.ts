import { Component } from '@angular/core';
import { IUcaRech } from 'src/app/models/IUcaRech';
import { UcaRechService } from 'src/app/services/ucaRech/uca-rech.service';

@Component({
  selector: 'app-uca-rech',
  templateUrl: './uca-rech.component.html',
  styleUrls: ['./uca-rech.component.css']
})
export class UcaRechComponent {
  ucaRechs!: IUcaRech[];

  constructor(private ucaRechservice: UcaRechService) { }

  ngOnInit() {
    this.getucaRechs();
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
