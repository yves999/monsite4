// import { Component, OnInit } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { RemplissageService } from './remplissage.service';
// import { ChangeDetectorRef } from '@angular/core';
// import { CommonModule } from '@angular/common';




import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { JtService } from './jt.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RemplissageService } from './remplissage.service';






@Component({
  selector: 'app-affichage',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  RouterLink
],
  templateUrl: './remplissage.html',
  styleUrl: './remplissage.css'
})

 
export class Remplissage implements OnInit {

  liste: any[] = [];
  nom = '';

  prenom = '';


 

  constructor(private remplissageService: RemplissageService,  private cdr: ChangeDetectorRef ) {}
 
 
   ngOnInit() {  

    //  this.charger();
   }  

    charger(): void {
      this.remplissageService.getJT()
        .subscribe(data => {
          this.liste = data;     
          this.cdr.detectChanges();   
          console.log ('this.liste: ' , this.liste)         
        });      
    }

   
  ajouter(): void {

      if (!this.nom || !this.prenom) {
              return;
       }

      console.log('CLICK');

      const data = {
        nom: this.nom,
        prenom: this.prenom
      };

      console.log('DATA ENVOYEE', data);

      this.remplissageService.ajouterJT(data)
        .subscribe({

          next: (res) => {  
            this.charger();
            this.nom = '';
            this.prenom = '';
          },

          error: (err) => {
            console.error('ERREUR', err);
          }
        });
   }




 }













// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-remplissage',
//   imports: [],
//   templateUrl: './remplissage.html',
//   styleUrl: './remplissage.css',
// })
// export class Remplissage {}
