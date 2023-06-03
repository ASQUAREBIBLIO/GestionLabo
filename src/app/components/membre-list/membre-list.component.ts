import { Component, OnInit } from '@angular/core';
import {MembreService} from '../../services/membre.service';
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