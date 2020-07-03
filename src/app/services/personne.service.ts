import { Personne } from '../models/personne.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  formData: Personne;
  list: Personne[];
  typec: Personne;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Personne";

  loadListePersonne() {
    return this.http.get(this.serverUrl).
    pipe(
       map((data: Personne[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  getPersonneBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Personnebytype/"+id_type);
  }

  getPersonne(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getPersonneBynum(formData: Personne) {
   // return this.http.get(environment.apiURL+"/Personnebynum/"+formData.numero);
  }

  postPersonne(formData: Personne) {
    return this.http.post(this.serverUrl, formData);
  }

  putPersonne(formData: Personne) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deletePersonne(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
