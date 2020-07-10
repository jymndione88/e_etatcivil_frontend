import { Livraison } from '../models/livraison.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  formData: Livraison;
  list: Livraison[];
  typec: Livraison;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/livraison";

  loadListeLivraison() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Livraison[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getLivraisonBytype(id: number, num: number, type: string) {
    return this.http.get(this.serverUrl + '/' + id + '/' + num + '/' + type).
    pipe(
       map((data: Livraison) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getLivraison(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Livraison) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  postLivraison(formData: Livraison) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Livraison) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putLivraison(formData: Livraison) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteLivraison(id: number) {
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
