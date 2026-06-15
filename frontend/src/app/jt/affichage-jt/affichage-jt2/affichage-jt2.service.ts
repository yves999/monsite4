
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AffichageJt2Service {

  constructor(private http: HttpClient) {}

  getJT(idJt: any): Observable<any[]> {

    const apiUrl = `${environment.apiUrl}/jt/affichage-jt2/${idJt}`;

    return this.http.get<any[]>(apiUrl);
  }

}











// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

// export class AffichageJt2Service {

//   private apiUrl = 'http://localhost:3000/jt/affichage-jt/affichage-jt2/${identifiant}/';

//   constructor(private http: HttpClient) {}

//   getJT(idJt: any): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }  
// }
















// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AffichageJt2Service {}
