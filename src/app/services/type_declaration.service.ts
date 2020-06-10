import { TypeDeclarations } from '../models/type_declaration.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Type_declarationService {

  formData: TypeDeclarations;
  list: TypeDeclarations[];
  typec: TypeDeclarations;

  constructor(private http: HttpClient
    ) {   }
    readonly serverUrl = environment.apiURL+"/typedeclaration";

  loadListeType_declaration() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: TypeDeclarations[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

//  getType_declarationBytype(id_type: number) {
  //  return this.http.get(environment.apiURL+"/typedeclarationbytype/"+id_type);
 // }

  getType_declaration(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: TypeDeclarations) => {
        return data;
       }), catchError( error => {
        return throwError( 'Erreur:' + error );
       })
    )
  }

 // getType_declarationBynum(formData: TypeDeclarations) {
   // return this.http.get(environment.apiURL+"/Type_declarationbynum/"+formData.numero);
 // }

  postType_declaration(formData: TypeDeclarations) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: any) => {
         return data;
       }), catchError( error => {
         return throwError( 'erreur: ' + error );
       })
    )
  }

  putType_declaration(formData: TypeDeclarations) {
    
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteType_declaration(id: number) {
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
