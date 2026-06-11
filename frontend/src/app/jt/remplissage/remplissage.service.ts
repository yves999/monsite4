
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class RemplissageService {

  private apiUrl = `${environment.apiUrl}/jt`;

  // private apiUrl = 'http://localhost:3000/jt';

  constructor(private http: HttpClient) {}

  getJT(): Observable<any[]> {

    return this.http.get<any[]>(this.apiUrl);
  }

  ajouterJT(data: any): Observable<any> {

    return this.http.post(this.apiUrl, data);
  }
}














// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class RemplissageService {}
