import { Etat_civil } from '../models/etat_civil.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Etat_civilService {

  formData: Etat_civil;
  list: Etat_civil[];
  typec: Etat_civil;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/etatcivil";

  loadListeEtat_civil() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Etat_civil[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

//  getEtat_civilBytype(id_type: number) {
  //  return this.http.get(environment.apiURL+"/Etat_civilbytype/"+id_type);
 // }

  getEtat_civil(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Etat_civil) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }


  postEtat_civil(formData: Etat_civil) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Etat_civil) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putEtat_civil(formData: Etat_civil) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteEtat_civil(id: number) {
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
