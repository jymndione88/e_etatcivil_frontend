import { Mariage } from '../models/mariage.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MariageService {

  formData: Mariage;
  list: Mariage[];
  typec: Mariage;

  constructor(private http: HttpClient
    ) {   }
    readonly serverUrl = environment.apiURL+"/mariage";

  loadListeMariage() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Mariage[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getMariage(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Mariage) => {
        return data;
       }), catchError( error => {
        return throwError( 'Erreur:' + error );
       })
    )
  }

  getMariageByDeclaration(id: number, num: string) {
    return this.http.get(this.serverUrl + "/" + id + "/" + num).
    pipe(
       map((data: Mariage) => {
        return data;
       }), catchError( error => {
        return throwError( 'Erreur:' + error );
       })
    )
  }

  postMariage(formData: Mariage) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: any) => {
         return data;
       }), catchError( error => {
         return throwError( 'erreur: ' + error );
       })
    )
  }

  putMariage(formData: Mariage) {
    
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteMariage(id: number) {
    return this.http.delete(this.serverUrl + '/' + id).
    pipe(
       map((data: any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }
  

}
