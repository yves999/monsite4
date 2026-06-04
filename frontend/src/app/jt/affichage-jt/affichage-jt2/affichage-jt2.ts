
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AffichageJt2Service } from './affichage-jt2.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affichage-jt',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './affichage-jt2.html',
  styleUrl: './affichage-jt2.css',
})
export class AffichageJt2 implements OnInit {

  liste: any[] = [];
  jtBackendData: any[] =[];
  id: any;
  idJt:  any; 
  nom: any;
  prenom: any;
  mel: any;
  rog: any;
  wim: any;
  uso: any;


  joueur: any;

 constructor(private affichageJt2Service: AffichageJt2Service,  private cdr: ChangeDetectorRef, private router: Router ) {}

  ngOnInit(){
     this.idJt = localStorage.getItem('idJt');

     this.affichageJt2Service.getJT(this.idJt)
        .subscribe(data => {

          this.liste = data;

          console.log ("this.liste: ", this.liste )

          if (data.length > 0) {
            this.joueur = data[0];
          }

          this.cdr.detectChanges();
      });

    //  this.affichageJt2Service.getJT(this.idJt)
    //   .subscribe(data => {
    //       this.liste = data;     
    //       this.cdr.detectChanges();   
    //       console.log ('this.liste: ' , this.liste);      
          
    //       this.nom = data[0].nom;
    //       this.prenom = data[0].prenom;
    //       console.log ('this.nom: ' , this.nom);
    //       console.log ('this.prenom: ' , this.prenom);   

    //   });    
  }

}































// import { Component,OnInit  } from '@angular/core';

// @Component({
//   selector: 'app-affichage-jt2',
//   imports: [],
//   templateUrl: './affichage-jt2.html',
//   styleUrl: './affichage-jt2.css',
// })
// export class AffichageJt2 implements OnInit {
    
//     id :any;
//     idJt:  any;

//     ngOnInit() {
//       this.idJt = localStorage.getItem('idJt');
//     }


//  }  
