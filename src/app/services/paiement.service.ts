import { Paiement } from '../models/paiement.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  formData: Paiement;
  list: Paiement[];
  typec: Paiement;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/paiement";

  loadListePaiement() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Paiement[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

 //getPaiementBytype(id_type: number) {
   // return this.http.get(environment.apiURL+"/Paiementbytype/"+id_type);
 // }

  getPaiement(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Paiement) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

 // getPaiementBynum(formData: Paiement) {
   // return this.http.get(environment.apiURL+"/Paiementbynum/"+formData.numero);
  //}

  postPaiement(formData: Paiement) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Paiement[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putPaiement(formData: Paiement) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deletePaiement(id: number) {
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
