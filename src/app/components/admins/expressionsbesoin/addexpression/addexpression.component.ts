import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExpressionBesoin } from 'src/app/models/IExpressionBesoin';
import { IMembre } from 'src/app/models/IMembre';
import { ITypeBesoin } from 'src/app/models/ITypeBesoin';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { ExpressionBesoinsService } from 'src/app/services/expressionBesoins/expression-besoins.service';
import { TypeBesoinService } from 'src/app/services/typebesoin/type-besoin.service';
import { MembreService } from 'src/app/services/membre/membre.service';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-addexpression',
  templateUrl: './addexpression.component.html',
  styleUrls: ['../../../../vendors/styles/style.css', '../../../../srctemplate/plugins/datatables/css/dataTables.bootstrap4.min.css','../../../../vendors/styles/core.css','../../../../vendors/styles/icon-font.min.css'],
})
export class AddexpressionComponent implements OnInit{
  
  authMembre!: IMembre;

  typebesoins: ITypeBesoin[] = [];

  slicedResults: any[] = [];
  typeLength: number = 0;
  eLength: number = 0;

  expressionBesoin: IExpressionBesoin = {
    montantApprox: 0,
    dateDem: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'),
    dateEffet: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'),
    montantEffet: 0,
    isValid: false,
    membre: {
      id: 0,
      nom: '',
      prenom: '',
      email: '',
      password: '',
      director: false,
      laboratoire: {
        id: 0,
        nomLabo: '',
        etablissement: {
          id: 0,
          nom: ''
        }
      },
      admin: {
        id: 0
      },
      projets: [],
      expressionBesoins: []
    },
    responsable: {
      id: 1,
      nom: '',
      prenom: ''
    },
    type: {
      id: 1,
      type: ''
    }
  };

  ngOnInit(): void {
    this.getAllTypeBesoin();
    this.getAuthMembre();
  }


  constructor(
    private router: Router,
    private expressionService: ExpressionBesoinsService,
    private typeBesoinService : TypeBesoinService,
    private authService: AuthService,
    private membreService: MembreService

  ) { }

  createExpressionBesoins() {
    const memberId = Number(localStorage.getItem('authId')?.split("+")[1]);
  
    if (!isNaN(memberId)) {
      this.membreService.getMembreById(memberId).subscribe(
        response => {
          this.expressionBesoin.membre = response;
  
          this.expressionService.createExpressionBesoins(this.expressionBesoin).subscribe(
            response => {
              console.log('Needs expression created successfully.');
              // Additional logic if needed
              this.router.navigate(['/listexpression']);
            },
            error => console.log(error)
          );
        },
        error => console.log(error)
      );
    } else {
      console.log('Invalid member ID.');
      // Handle the case when the member ID is not a valid number
    }
  }

  getAllTypeBesoin() {
    this.typeBesoinService.getAllTypeBesoin().subscribe(
      response => {
        this.typeLength = response.length;
        this.slicedResults = response.slice(0, 5).sort((a, b) => { return b.id! - a.id!});;
        this.typebesoins = this.slicedResults;
      },
      error => {
        console.log('Error fetching admins:', error);
      }
    );
  }

//   getAuthMembre() {
//   const memberId = Number(localStorage.getItem('authId'));

//   if (!isNaN(memberId)) {
//     this.membreService.getMembreById(memberId).subscribe(
//       response => {
//         this.authMembre = response;
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   } else {
//     console.log('Invalid member ID.');
//     // Handle the case when the member ID is not a valid number
//   }
// }
getAuthMembre(){
   
  this.membreService.getMembreById(Number(localStorage.getItem('authId')?.split("+")[1])).subscribe(
    response => {
      this.authMembre = response;
    },
    error => {
      console.log(error);
    }
  )
}

logout() {
  this.authService.logout();
}


}
