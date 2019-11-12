import { Etat_civil } from '../models/etat_civil.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Etat_civilService {

  formData: Etat_civil;
  list: Etat_civil[];
  typec: Etat_civil;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Etat_civil";

  loadListeEtat_civil() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Etat_civil[]);
  }

  getEtat_civilBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Etat_civilbytype/"+id_type);
  }

  getEtat_civil(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getEtat_civilBynum(formData: Etat_civil) {
    //return this.http.get(environment.apiURL+"/Etat_civilbynum/"+formData.numero);
  }

  postEtat_civil(formData: Etat_civil) {
    return this.http.post(this.serverUrl, formData);
  }

  putEtat_civil(formData: Etat_civil) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteEtat_civil(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
