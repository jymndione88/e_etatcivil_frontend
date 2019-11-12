import { Departement } from '../models/departement.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  formData: Departement;
  list: Departement[];
  typec: Departement;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Departement";

  loadListeDepartement() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Departement[]);
  }

  getDepartementBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Departementbytype/"+id_type);
  }

  getDepartement(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getDepartementBynum(formData: Departement) {
   // return this.http.get(environment.apiURL+"/Departementbynum/"+formData.numero);
  }

  postDepartement(formData: Departement) {
    return this.http.post(this.serverUrl, formData);
  }

  putDepartement(formData: Departement) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteDepartement(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
