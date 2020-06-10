import { Type_etatcivil } from '../models/type_etatcivil.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Type_etatcivilService {

  formData: Type_etatcivil;
  list: Type_etatcivil[];
  typec: Type_etatcivil;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/typeetatcivil";

  loadListeType_etatcivil() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Type_etatcivil[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

 // getType_etatcivilBytype(id_type: number) {
   // return this.http.get(environment.apiURL+"/typeetatcivilbytype/"+id_type);
  //}

  getType_etatcivil(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Type_etatcivil) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

 // getType_etatcivilBynum(formData: Type_etatcivil) {
   // return this.http.get(environment.apiURL+"/Type_etatcivilbynum/"+formData.numero);
  //}

  postType_etatcivil(formData: Type_etatcivil) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Type_etatcivil[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putType_etatcivil(formData: Type_etatcivil) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteType_etatcivil(id: number) {
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
