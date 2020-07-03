import { Facture } from '../models/facture.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  formData: Facture;
  list: Facture[];
  typec: Facture;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/facture";

  loadListeFacture() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Facture[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

//  getFactureBytype(id_type: number) {
  //  return this.http.get(environment.apiURL+"/Facturebytype/"+id_type);
  //}

  getFacture(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Facture) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getFactureBynum(formData: Facture) {
    //return this.http.get(environment.apiURL+"/Facturebynum/"+formData.numero);
  }

  postFacture(formData: Facture) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Facture[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putFacture(formData: Facture) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteFacture(id: number) {
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
