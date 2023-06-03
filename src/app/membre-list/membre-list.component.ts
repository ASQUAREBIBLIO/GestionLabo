import { Component, OnInit } from '@angular/core';
import {MembreService} from '../services/membre.service';
import { IMembre } from '../models/IMembre';

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit {
    membres: IMembre[] | undefined;

    constructor(private membreService: MembreService) {
    }

    ngOnInit() {
      this.membreService.findAll().subscribe(data => {
        this.membres = data;
      });
    }
}
