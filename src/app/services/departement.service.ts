import { Departement } from '../models/departement.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  formData: Departement;
  list: Departement[];
  typec: Departement;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/departement";

  loadListeDepartement() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Departement[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getDepartement(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Departement) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  postDepartement(formData: Departement) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Departement) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putDepartement(formData: Departement) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteDepartement(id: number) {
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
