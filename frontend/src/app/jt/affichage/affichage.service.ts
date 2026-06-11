import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AffichageService {


  private apiUrl = `${environment.apiUrl}/jt/affichage`;

  // private apiUrl = 'http://localhost:3000/jt/affichage';

  constructor(private http: HttpClient) {}

  getJT(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }  
}












// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AffichageService {}
