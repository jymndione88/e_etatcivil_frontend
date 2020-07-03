import { Internaute } from '../models/internaute.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { SignupRequest } from '../models/signup_request.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class InternauteService {

  formData: Internaute;
  list: Internaute[];
  typec: Internaute;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/internaute";
    readonly serverConnect = environment.apiURL + "/auth";

  loadListeInternaute() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Internaute[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  login(formData: Internaute) : Observable<any> {
    return this.http.post(this.serverConnect + '/login', {
      login: formData.login,
      email: formData.email,
      password: formData.password
    }, httpOptions);
  }

  inscrire(formData: SignupRequest) : Observable<any> {
    return this.http.post(this.serverConnect + '/inscrire', {
      login: formData.login,
      email: formData.email,
      password: formData.password, 
      role: ["User"]
    }, httpOptions);
  }

  getInternaute(id: number) {
    return this.http.get(this.serverConnect + '/internaute/' + id).
    pipe(
       map((data: Internaute) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  postInternaute(formData: Internaute) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Internaute[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putInternaute(formData: Internaute) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteInternaute(id: number) {
    return this.http.delete(this.serverUrl + '/' + id).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

}
