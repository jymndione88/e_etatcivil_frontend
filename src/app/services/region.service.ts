import { Region } from '../models/region.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  formData: Region;
  list: Region[];
  typec: Region;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/region";

  loadListeRegion() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Region[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getRegion(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Region) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  postRegion(formData: Region) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: Region) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  putRegion(formData: Region) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteRegion(id: number) {
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
