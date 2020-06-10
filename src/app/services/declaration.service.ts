import { Declaration } from '../models/declaration.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  formData: Declaration;
  list: Declaration[];
  typec: Declaration;

  constructor(private http: HttpClient
    ) {   }
    readonly serverUrl = environment.apiURL+"/declaration";

  loadListeDeclaration() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Declaration[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

//  getType_declarationBytype(id_type: number) {
  //  return this.http.get(environment.apiURL+"/typedeclarationbytype/"+id_type);
 // }

  getDeclaration(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Declaration) => {
        return data;
       }), catchError( error => {
        return throwError( 'Erreur:' + error );
       })
    )
  }

 // getType_declarationBynum(formData: Declaration) {
   // return this.http.get(environment.apiURL+"/Type_declarationbynum/"+formData.numero);
 // }

  postDeclaration(formData: Declaration) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: any) => {
         return data;
       }), catchError( error => {
         return throwError( 'erreur: ' + error );
       })
    )
  }

  putDeclaration(formData: Declaration) {
    
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteDeclaration(id: number) {
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
