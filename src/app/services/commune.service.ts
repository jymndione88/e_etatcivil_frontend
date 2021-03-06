import { Commune } from '../models/commune.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  formData: Commune;
  list: Commune[];
  typec: Commune;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/commune";

  loadListeCommune() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Commune[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

 // getCommuneBytype(id_type: number) {
   // return this.http.get(environment.apiURL+"/communebytype/"+id_type);
 // }

  getCommune(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Commune) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  postCommune(formData: Commune) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Commune) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putCommune(formData: Commune) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteCommune(id: number) {
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
