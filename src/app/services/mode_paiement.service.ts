import { Mode_paiement } from '../models/mode_paiement.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Mode_paiementService {

  formData: Mode_paiement;
  list: Mode_paiement[];
  typec: Mode_paiement;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/modepaiement";

  loadListeMode_paiement() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Mode_paiement[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getMode_paiementBytype(id: number, type: string) {
    return this.http.get(this.serverUrl + '/' + id + '/' + type).
    pipe(
       map((data: Mode_paiement) => {
        return data;
       }), catchError( error => {
        return throwError( 'Erreur:' + error );
       })
    )
  }

  getMode_paiement(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Mode_paiement) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  postMode_paiement(formData: Mode_paiement) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Mode_paiement[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putMode_paiement(formData: Mode_paiement) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteMode_paiement(id: number) {
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
