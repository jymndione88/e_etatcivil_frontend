import { Deces } from '../models/deces.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DecesService {

  formData: Deces;
  list: Deces[];
  typec: Deces;

  constructor(private http: HttpClient
    ) {   }
    readonly serverUrl = environment.apiURL+"/deces";

  loadDeces() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Deces[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

//  getType_declarationBytype(id_type: number) {
  //  return this.http.get(environment.apiURL+"/typedeclarationbytype/"+id_type);
 // }

  getDeces(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Deces) => {
        return data;
       }), catchError( error => {
        return throwError( 'Erreur:' + error );
       })
    )
  }

 // getType_declarationBynum(formData: Deces) {
   // return this.http.get(environment.apiURL+"/Type_declarationbynum/"+formData.numero);
 // }

  postDeces(formData: Deces) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: any) => {
         return data;
       }), catchError( error => {
         return throwError( 'erreur: ' + error );
       })
    )
  }

  putDeces(formData: Deces) {
    
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteDeces(id: number) {
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
