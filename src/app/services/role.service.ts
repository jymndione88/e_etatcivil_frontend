import { Role} from '../models/role.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  formData: Role;
  list: Role[];
  typec: Role;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/role";

  loadListeRole() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Role[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getRole(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Role) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

 
  postRole(formData: Role) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Role) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putRole(formData: Role) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteRole(id: number) {
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
