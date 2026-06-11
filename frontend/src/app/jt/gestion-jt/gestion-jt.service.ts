
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GestionJtService {

     private apiUrl = `${environment.apiUrl}/jt/gestion-jt`;

    // private apiUrl = 'http://localhost:3000/jt/gestion-jt';

    constructor(private http: HttpClient) {}

    getGesionJt(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }  

    getGestionJt2(idJt: any): Observable<any[]> {

       const apiUrl2 = `http://localhost:3000/jt/gestion-jt/${idJt}`;

       return this.http.get<any[]>(apiUrl2);
    }

    ajouterJT(data: any): Observable<any> {

        console.log ("ajouterJT_data: ", data)

       return this.http.post(this.apiUrl, data);
    }

    modifierJT(id: any, data: any): Observable<any> {

        const apiUrl2 = `http://localhost:3000/jt/gestion-jt/${id}`;

        console.log ("modifierJT_data: ", data)

        return this.http.put(apiUrl2, data);
    }

    supprimerJT(id: any): Observable<any> {

          const apiUrl2 = `http://localhost:3000/jt/gestion-jt/${id}`;

          console.log ("supprimerJT_id: ", id)

          return this.http.delete(apiUrl2);
     }


  }



// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class GestionJtService {}
