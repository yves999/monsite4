

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JtService } from './jt.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-jt',

  standalone: true,
  
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

   // imports: [
  //   CommonModule,
  //   FormsModule
  // ],


  templateUrl: './jt.html',

  // templateUrl: './jt.component.html',

  styleUrls: ['./jt.css']
})

export class Jt implements OnInit {

  liste: any[] = [];

  nom = '';
  prenom = '';

  constructor(private jtService: JtService, private cdr: ChangeDetectorRef,private router: Router) {

    // this.charger();
  }

  ngOnInit() {  

     this.charger();
  }  

  charger(): void {

    this.jtService.getJT()
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

      this.jtService.ajouterJT(data)
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



  // ajouter(): void {

  //   if (!this.nom || !this.prenom) {
  //         return;
  //   }

  //   const data = {

  //     nom: this.nom,

  //     prenom: this.prenom
  //   };

  //   this.jtService.ajouterJT(data)
  //     .subscribe(() => {

  //       this.charger();  
        
  //        this.nom = '';

  //       this.prenom = '';
        
  //   });


  // }
}


// export class Jt {

//   liste: any[] = [];

//   nom = '';

//   prenom = '';

//   constructor(private jtService: JtService) {

//     this.charger();
//   }

//   charger(): void {

//     this.jtService.getJT()
//       .subscribe(data => {

//         this.liste = data;
//       });
//   }

//   ajouter(): void {

//     const data = {

//       nom: this.nom,

//       prenom: this.prenom
//     };

//     this.jtService.ajouterJT(data)
//       .subscribe(() => {

//         this.nom = '';

//         this.prenom = '';

//         this.charger();        
//       });
//   }
// }




// import { Component, OnInit } from '@angular/core';

// import { CommonModule } from '@angular/common';

// import { FormsModule } from '@angular/forms';

// import { JtService } from './jt.service';

// @Component({
//   selector: 'app-jt',

//   standalone: true,

//   imports: [
//     CommonModule,
//     FormsModule
//   ],

//   templateUrl: './jt.html',

//   styleUrl: './jt.css'
// })

// export class Jt implements OnInit {

//   liste: any[] = [];

//   nom = '';

//   prenom = '';

//   constructor(private jtService: JtService) {}

//   ngOnInit(): void {

//     this.charger();
//   }

//   charger(): void {

//     this.jtService.getJT()
//       .subscribe(data => {

//         this.liste = data;
//       });
//   }

//   ajouter(): void {

//     const data = {

//       nom: this.nom,

//       prenom: this.prenom
//     };

//     this.jtService.ajouterJT(data)
//       .subscribe(() => {

//         this.nom = '';

//         this.prenom = '';

//         this.charger();
//       });
//   }
// }

// // import { Component, OnInit } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule } from '@angular/forms';
// // import { HttpClient } from '@angular/common/http';

// // @Component({
// //   selector: 'app-jt',
// //   standalone: true,

// //   imports: [
// //     CommonModule,
// //     FormsModule
// //   ],

// //   templateUrl: './jt.html'
// // })
// // export class JtComponent implements OnInit {

// //   liste: any[] = [];

// //   nom = '';
// //   prenom = '';

// //   constructor(private http: HttpClient) {}

// //   ngOnInit(): void {
// //     this.charger();
// //   }

// //   charger(): void {

// //     this.http.get<any[]>(
// //       'http://localhost:3000/jt'
// //     ).subscribe(data => {

// //       this.liste = data;
// //     });
// //   }

// //   ajouter(): void {

// //     this.http.post(
// //       'http://localhost:3000/jt',
// //       {
// //         nom: this.nom,
// //         prenom: this.prenom
// //       }
// //     ).subscribe(() => {

// //       this.nom = '';
// //       this.prenom = '';

// //       this.charger();
// //     });
// //   }
// // }











// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { JtService } from './jt.service';
// // import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-jt',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule
//   ],
//   templateUrl: './jt.html',
//   styleUrls: ['./jt.css']
// })

// export class Jt implements OnInit {

//   liste: any[] = [];

//   nom = '';
//   prenom = '';

//   constructor(private jtService: JtService) {}

//   //  constructor(private jtService: JtService,private http: HttpClient) {}

//   ngOnInit(): void {
//     this.charger();
//   }

//   charger(): void {

//     this.jtService.getJT()
//       .subscribe(data => {

//         this.liste = data;

//         console.log('this.liste:', this.liste);

//       });
//   }

//   ajouter(): void {

//     const data = {

//       nom: this.nom,

//       prenom: this.prenom
//     };

//     this.jtService.ajouterJT(data)
//       .subscribe(() => {

//         // this.nom = '';

//         // this.prenom = '';

//         this.charger();  
        
//         //  this.nom = '';

//         // this.prenom = '';
        
//     });

//     // this.nom = '';

//     // this.prenom = '';

//     // this.charger();  



// }








// }
















// // import { Component, OnInit } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule } from '@angular/forms';

// // @Component({
// //   selector: 'app-jt',
// //   standalone: true,

// //   imports: [
// //     CommonModule,
// //     FormsModule
// //   ],

// //   templateUrl: './jt.component.html'
// // })
// // export class JtComponent implements OnInit {

// //   liste: any[] = [];

// //   nom = '';
// //   prenom = '';

// //   constructor(private http: HttpClient) {}

// //   ngOnInit(): void {
// //     this.charger();
// //   }

// //   charger(): void {

// //     this.http.get<any[]>(
// //       'http://localhost:3000/jt'
// //     ).subscribe(data => {

// //       this.liste = data;
// //     });
// //   }

// //   ajouter(): void {

// //     this.http.post(
// //       'http://localhost:3000/jt',
// //       {
// //         nom: this.nom,
// //         prenom: this.prenom
// //       }
// //     ).subscribe(() => {

// //       this.nom = '';
// //       this.prenom = '';

// //       this.charger();
// //     });
// //   }
// // }




// // import { Component, OnInit } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';

// // @Component({
// //   selector: 'app-jt',
// //   templateUrl: './jt.component.html'
// // })
// // export class JtComponent implements OnInit {

// //   liste: any[] = [];
// //   nom = "";
// //   prenom = "";

// //   constructor(private http: HttpClient) {}

// //   ngOnInit(): void {
// //     this.charger();
// //   }

// //   charger(): void {
// //     this.http.get<any[]>("http://localhost:3000/jt")
// //       .subscribe(data => this.liste = data);
// //   }

// //   ajouter(): void {
// //     this.http.post("http://localhost:3000/jt", {
// //       nom: this.nom,
// //       prenom: this.prenom
// //     }).subscribe(() => {
// //       this.nom = "";
// //       this.prenom = "";
// //       this.charger();
// //     });
// //   }
// // }


// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-jt',
// //   imports: [],
// //   templateUrl: './jt.html',
// //   styleUrl: './jt.css',
// // })
