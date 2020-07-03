import { Lieu_hospitalier } from '../models/lieu_hospitalier.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Lieu_hospitalierService {

  formData: Lieu_hospitalier;
  list: Lieu_hospitalier[];
  typec: Lieu_hospitalier;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/lieuhospitalier";

  loadListeLieu_hospitalier() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Lieu_hospitalier[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  //getLieu_hospitalierBytype(id_type: number) {
   // return this.http.get(environment.apiURL+"/Lieu_hospitalierbytype/"+id_type);
 // }

  getLieu_hospitalier(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Lieu_hospitalier) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getLieu_hospitalierBynum(formData: Lieu_hospitalier) {
   // return this.http.get(environment.apiURL+"/Lieu_hospitalierbynum/"+formData.numero);
  }

  postLieu_hospitalier(formData: Lieu_hospitalier) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Lieu_hospitalier[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putLieu_hospitalier(formData: Lieu_hospitalier) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteLieu_hospitalier(id: number) {
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
