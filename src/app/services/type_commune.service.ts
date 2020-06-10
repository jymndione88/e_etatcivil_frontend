import { Type_commune } from '../models/type_commune.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Type_communeService {

  formData: Type_commune;
  list: Type_commune[];
  typec: Type_commune;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/typecommune";

  loadListeType_commune() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Type_commune[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

 // getType_communeBytype(id_type: number) {
   // return this.http.get(environment.apiURL+"/typecommunebytype/"+id_type);
 // }

  getType_commune(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Type_commune) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

 // getType_communeBynum(formData: Type_commune) {
   // return this.http.get(environment.apiURL+"/Type_communebynum/"+formData.numero);
  //}

  postType_commune(formData: Type_commune) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Type_commune[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putType_commune(formData: Type_commune) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteType_commune(id: number) {
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
