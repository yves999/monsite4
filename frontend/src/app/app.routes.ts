
import { Routes } from '@angular/router';
import { Jt } from './jt/jt';
import { Federer } from './jt/federer/federer';
import { Nadal } from './jt/nadal/nadal';
import { Djokovic } from './jt/djokovic/djokovic';
import { Affichage } from './jt/affichage/affichage';
import { Remplissage } from './jt/remplissage/remplissage';
import { AffichageJT } from './jt/affichage-jt/affichage-jt';
import { GestionJT } from './jt/gestion-jt/gestion-jt';
import { AffichageJt2 } from './jt/affichage-jt/affichage-jt2/affichage-jt2';


export const routes: Routes = [
  
   { path: '', component: Jt },    
   { path: 'jt', component: Jt },
   { path: 'federer', component: Federer },
   { path: 'nadal', component: Nadal },
   { path: 'djokovic', component: Djokovic },
   { path: 'affichage', component: Affichage },
   { path: 'remplissage', component: Remplissage },
   { path: 'affichage-jt', component: AffichageJT },
   { path: 'gestion-jt', component: GestionJT },
    { path: 'affichage-jt2', component: AffichageJt2 }

];








// import { Routes } from '@angular/router';

// export const routes: Routes = [];
