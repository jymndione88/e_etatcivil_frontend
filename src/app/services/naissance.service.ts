import { Naissance } from '../models/naissance.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Email } from '../models/email.model';


@Injectable({
  providedIn: 'root'
})
export class NaissanceService {

  formData: Naissance;
  list: Naissance[];
  typec: Naissance;

  constructor(private http: HttpClient
    ) {   }
    readonly serverUrl = environment.apiURL+"/naissance";
    readonly serverUrlMail = environment.apiURL+"/sendmail";
    
    sendEmail(data: Email) {
      return this.http.get(this.serverUrlMail + '/' + data.email + '/' + data.objet + '/' + data.body).
      pipe(
         map((data: any) => {
           console.log("entre");
           console.log(data);
           return data;
         }), catchError( error => {
           return throwError( 'erreur: ' + error );
         })
      )
    }

  loadListeNaissance() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Naissance[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getNaissanceByDeclaration(id: number, num: number) {
    return this.http.get(this.serverUrl + "/" + id + "/" + num).
    pipe(
       map((data: Naissance) => {
        return data;
       }), catchError( error => {
        return throwError( 'Erreur:' + error );
       })
    )
  }

  getNaissance(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Naissance) => {
        return data;
       }), catchError( error => {
        return throwError( 'Erreur:' + error );
       })
    )
  }

  postNaissance(formData: Naissance) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: any) => {
         return data;
       }), catchError( error => {
         return throwError( 'erreur: ' + error );
       })
    )
  }

  putNaissance(formData: Naissance) {
    
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteNaissance(id: number) {
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
