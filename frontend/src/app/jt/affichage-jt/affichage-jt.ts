
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AffichageJTService } from './affichage-jt.service';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affichage-jt',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './affichage-jt.html',
  styleUrl: './affichage-jt.css',
})



export class AffichageJT implements OnInit {

  liste: any[] = [];
  jtBackendData: any[] =[];
  id :any;
  idJt:  any;

  jtForm = new UntypedFormGroup({
    'jtSelect': new UntypedFormControl('', Validators.required),
    'selectedJt': new UntypedFormControl('', Validators.required)
  });


 constructor(private affichageJTService: AffichageJTService,  private cdr: ChangeDetectorRef,private router: Router ) {}


  ngOnInit(){

     this.affichageJTService.getJT().subscribe(data => {
        this.liste = data;     
        this.cdr.detectChanges();   
        console.log ('this.liste: ' , this.liste)         
     });    

  }  // ngOnInit

  getSelectedJt(event:any){
     this.jtForm.controls['selectedJt'].setValue(event.target.value); 
  } // getSelectedJt

  onAnnuler() {
      this.jtForm.reset();
      this.affichageJTService.getJT().subscribe(data => {
        this.liste = data;     
        this.cdr.detectChanges();   
        console.log ('this.liste: ' , this.liste);
        this.jtForm.controls['jtSelect'].setValue("", {onlySelf: true});   
        //  this.jtForm.controls['jtSelect'].setValue("");
      });   
  }  //onAnnuler

    onGo() {

          
          // if ((this.jtForm.controls['selectedJt'].value ===  'Faites votre sélection') ) { 
          //     alert( " Joueur de tennis manquant");
          //     this.onAnnuler();
          //     return;
          // }

      

              
          if ((this.jtForm.controls['selectedJt'].value ===  null) || (this.jtForm.controls['selectedJt'].value ===  '') ) { 
                alert( " Joueur de tennis manquant");
                this.onAnnuler();
                return;
          }

            console.log('this.jtForm.controls[selectedJt].value : ', this.jtForm.controls['selectedJt'].value);

            const id = this.jtForm.controls['selectedJt'].value;

            console.log('id sélectionné : ', id);

            localStorage.setItem('idJt', id);

            this.router.navigate(['/affichage-jt2']);

    } // onGo


}
