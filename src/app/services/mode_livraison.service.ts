import { Mode_livraison } from '../models/mode_livraison.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Mode_livraisonService {

  formData: Mode_livraison;
  list: Mode_livraison[];
  typec: Mode_livraison;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/modelivraison";

  loadListeMode_livraison() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Mode_livraison[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getMode_livrisonBytype(id: number, type: string) {
    return this.http.get(this.serverUrl + '/' + id + '/' + type).
    pipe(
       map((data: Mode_livraison) => {
        return data;
       }), catchError( error => {
        return throwError( 'Erreur:' + error );
       })
    )
  }

  getMode_livraison(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Mode_livraison) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  postMode_livraison(formData: Mode_livraison) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Mode_livraison[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putMode_livraison(formData: Mode_livraison) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteMode_livraison(id: number) {
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
