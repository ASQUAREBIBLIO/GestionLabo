import { Component, OnInit } from '@angular/core';
import {MembreService} from '../../services/membre/membre.service';
import { IMembre } from '../../models/IMembre';

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit {
    membres!: IMembre[];

    constructor(private membreService: MembreService) { }

    ngOnInit() {
      this.getMembres();
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
  
    updateMembre(membreId: number, membre: IMembre) {
      this.membreService.updateMembre(membreId, membre).subscribe(
        response => {
          console.log('Etablissement updated successfully.');
          // Refresh projets list
          this.getMembres();
        },
        error => console.log(error)
      );
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
}
