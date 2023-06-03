import { Component } from '@angular/core';
import { IProjet } from 'src/app/models/IProjet';
import { ProjetService } from '../../services/projet/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {
  projets: IProjet[] = [];

  constructor(private projetService: ProjetService) { }

  ngOnInit() {
    this.loadProjets();
  }

  loadProjets() {
    this.projetService.getAllProjets().subscribe(
      projets => this.projets = projets,
      error => console.log(error)
    );
  }

  createProjet(projet: IProjet) {
    this.projetService.createProjet(projet).subscribe(
      response => {
        console.log('Projet created successfully.');
        // Refresh projets list
        this.loadProjets();
      },
      error => console.log(error)
    );
  }

  updateProjet(projetId: number, projet: IProjet) {
    this.projetService.updateProjet(projetId, projet).subscribe(
      response => {
        console.log('Etablissement updated successfully.');
        // Refresh projets list
        this.loadProjets();
      },
      error => console.log(error)
    );
  }

  deleteProjet(projetId: number) {
    this.projetService.deleteProjet(projetId).subscribe(
      response => {
        console.log('Projet deleted successfully.');
        // Refresh projets list
        this.loadProjets();
      },
      error => console.log(error)
    );
  }
}
