import { Jugement } from '../models/jugement.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JugementService {

  formData: Jugement;
  list: Jugement[];
  typec: Jugement;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/jugement";

  loadListeJugement() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Jugement[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  //getJugementBytype(id_type: number) {
    //return this.http.get(environment.apiURL+"/Jugementbytype/"+id_type);
 // }

  getJugement(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Jugement) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  postJugement(formData: Jugement) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Jugement) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putJugement(formData: Jugement) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteJugement(id: number) {
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
