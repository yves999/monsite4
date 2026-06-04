
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GestionJtService } from './gestion-jt.service';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-jt',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './gestion-jt.html',
  styleUrl: './gestion-jt.css'
})

export class GestionJT implements OnInit {

  liste: any[] = [];
  jtBackendData: any[] =[];
  id :any;
  idJt:  any;
  nom = '';
  prenom = '';

  jtForm = new UntypedFormGroup({
    'jtSelect': new UntypedFormControl('', Validators.required),
    'selectedJt': new UntypedFormControl('', Validators.required),
    'selectedNom': new UntypedFormControl('', Validators.required),
    'selectedPrenom': new UntypedFormControl('', Validators.required),
    'selectedMel': new UntypedFormControl('', Validators.required),
    'selectedRog': new UntypedFormControl('', Validators.required),
    'selectedWim': new UntypedFormControl('', Validators.required),
    'selectedUso': new UntypedFormControl('', Validators.required)
  });


 constructor(private gestionJtService: GestionJtService,  private cdr: ChangeDetectorRef,private router: Router ) {}

 
 ngOnInit(){

     this.gestionJtService.getGesionJt().subscribe(data => {
        this.liste = data;     
        this.cdr.detectChanges();   
        console.log ('this.liste: ' , this.liste)         
     });    

  }  // ngOnInit

  getSelectedJt(event:any){

      this.jtForm.controls['selectedJt'].setValue(event.target.value); 

      const id = this.jtForm.controls['selectedJt'].value;

      console.log('id sélectionné : ', id);
      
      // this.gestionJtService.getGestionJt2(id).subscribe(data => {
      //         this.liste = data;     
      //         this.cdr.detectChanges();   
      //         console.log ('this.liste: ', this.liste);
      //         this.jtForm.controls['selectedNom'].setValue(this.liste[0].nom); 
      //         this.jtForm.controls['selectedPrenom'].setValue(this.liste[0].prenom);              
      // }); 

       this.gestionJtService.getGestionJt2(id).subscribe(data => {

        console.log('data : ', data);

        if (data.length > 0) {

              this.jtForm.controls['selectedNom'].setValue(data[0].nom); 
              this.jtForm.controls['selectedPrenom'].setValue(data[0].prenom);              
              this.jtForm.controls['selectedMel'].setValue(data[0].mel); 
              this.jtForm.controls['selectedRog'].setValue(data[0].rog);              
              this.jtForm.controls['selectedWim'].setValue(data[0].wim); 
              this.jtForm.controls['selectedUso'].setValue(data[0].uso);

            // this.jtForm.patchValue({
            //     selectedNom: data[0].nom,
            //     selectedPrenom: data[0].prenom
            // });
        }

    });




  } // getSelectedJt


  onCreation() {   

     if ((this.jtForm.controls['selectedNom'].value ===  null) || (this.jtForm.controls['selectedNom'].value ===  '') ) { 
                alert( "Nom manquant");
                // this.onAnnuler();
                return;
     }

     if ((this.jtForm.controls['selectedPrenom'].value ===  null) || (this.jtForm.controls['selectedPrenom'].value ===  '') ) { 
                alert( "Prénom manquant");
                // this.onAnnuler();
                return;
     }

     const data = {
        nom: this.jtForm.controls['selectedNom'].value,
        prenom: this.jtForm.controls['selectedPrenom'].value,
        mel: this.jtForm.controls['selectedMel'].value,
        rog: this.jtForm.controls['selectedRog'].value,
        wim: this.jtForm.controls['selectedWim'].value,
        uso: this.jtForm.controls['selectedUso'].value
      };

      console.log('DATA ENVOYEE', data);

      this.gestionJtService.ajouterJT(data).subscribe({

              next: (res) => {

                  alert(
                      "Le joueur " +
                      data.nom +
                      " " +
                      data.prenom +
                      " est créé."
                  );

                  this.onAnnuler();
              },

              error: (err) => {

                  if (err.status === 409) {
                      alert("Ce joueur existe déjà.");
                  }

                  console.error(err);
              }

       });



                //   this.gestionJtService.ajouterJT(data).subscribe((res: any) =>{
                      
                //         console.log('res_ajouterJT:', res);

                //   });

                // //   this.gestionJtService.ajouterJT(data).subscribe({
                // //         error: (err) => {
                // //             console.error('ERREUR', err);
                // //        }
                // //   });


                //   alert( "Le joueur " + this.jtForm.controls['selectedNom'].value + " " 
                //     + this.jtForm.controls['selectedPrenom'].value + " est créé.");

                //   this.onAnnuler();

  }  // onCreation

 onModification() {

    const id = this.jtForm.controls['selectedJt'].value;

    if (!id) {
        alert("Veuillez sélectionner un joueur.");
        return;
    }

    if (
        this.jtForm.controls['selectedNom'].value === null ||
        this.jtForm.controls['selectedNom'].value === ''
    ) {
        alert("Nom manquant");
        return;
    }

    if (
        this.jtForm.controls['selectedPrenom'].value === null ||
        this.jtForm.controls['selectedPrenom'].value === ''
    ) {
        alert("Prénom manquant");
        return;
    }

   const data = {
        nom: this.jtForm.controls['selectedNom'].value,
        prenom: this.jtForm.controls['selectedPrenom'].value,
        mel: this.jtForm.controls['selectedMel'].value,
        rog: this.jtForm.controls['selectedRog'].value,
        wim: this.jtForm.controls['selectedWim'].value,
        uso: this.jtForm.controls['selectedUso'].value
      };

    console.log('DATA MODIFICATION', data);


   this.gestionJtService.modifierJT(id, data).subscribe({

        next: (res) => {

            alert(
                "Le joueur " +
                data.nom +
                " " +
                data.prenom +
                " est modifié."
            );

            this.onAnnuler();
        },

        error: (err) => {

            if (err.status === 409) {
                alert(err.error.message);
                return;
            }

            console.error(err);
            alert("Erreur lors de la modification.");
        }
        
    });

    // this.gestionJtService.modifierJT(id, data).subscribe((res: any) =>{

    //           console.log('res_modifierJT:', res);


    //           alert(
    //             "Le joueur " +
    //             data.nom +
    //             " " +
    //             data.prenom +
    //             " est modifié."
    //           );
    
    // });

    //  this.gestionJtService.modifierJT(id, data).subscribe({

    //     next: (response) => {

    //         console.log('JOUEUR MODIFIE', response);

    //         alert(
    //             "Le joueur " +
    //             data.nom +
    //             " " +
    //             data.prenom +
    //             " est modifié."
    //         );

    //         this.onAnnuler();
    //     },

    //     error: (err) => {
    //         console.error('ERREUR', err);
    //     }

    // });

}  // onModification

 onSuppression() {

    const id = this.jtForm.controls['selectedJt'].value;

    if (!id) {
        alert("Veuillez sélectionner un joueur.");
        return;
    }

    const nom = this.jtForm.controls['selectedNom'].value;
    const prenom = this.jtForm.controls['selectedPrenom'].value;

    const confirmation = confirm(
        "Confirmez-vous la suppression de " +
        nom +
        " " +
        prenom +
        " ?"
    );

    if (!confirmation) {
        return;
    }

    this.gestionJtService.supprimerJT(id).subscribe((res: any) =>{

         console.log('res_modifierJT:', res);

            alert(
                "Le joueur " + nom + " " + prenom + " est supprimé."
            );

            this.onAnnuler();

    });


    // this.gestionJtService.supprimerJT(id).subscribe({

    //     next: (response) => {

    //         console.log('JOUEUR SUPPRIME', response);

    //         alert(
    //             "Le joueur " +
    //             nom +
    //             " " +
    //             prenom +
    //             " est supprimé."
    //         );

    //         this.onAnnuler();
    //     },

    //     error: (err) => {
    //         console.error('ERREUR', err);
    //     }

    // });

}  // onSuppression

  onAnnuler() {
      this.jtForm.reset();
      this.gestionJtService.getGesionJt().subscribe(data => {
        this.liste = data;     
        this.cdr.detectChanges();   
        console.log ('this.liste: ' , this.liste);
        this.jtForm.controls['jtSelect'].setValue("", {onlySelf: true});   
        //  this.jtForm.controls['jtSelect'].setValue("");
      });   
  }  // onAnnuler

 


  
}









































// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-gestion-jt',
//   imports: [],
//   templateUrl: './gestion-jt.html',
//   styleUrl: './gestion-jt.css',
// })
// export class GestionJT {}
