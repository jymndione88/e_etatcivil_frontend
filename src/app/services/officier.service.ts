import { Officier } from '../models/officier.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficierService {

  formData: Officier;
  list: Officier[];
  typec: Officier;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Officier";

  loadListeOfficier() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Officier[]);
  }

  getOfficierBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Officierbytype/"+id_type);
  }

  getOfficier(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getOfficierBynum(formData: Officier) {
   // return this.http.get(environment.apiURL+"/Officierbynum/"+formData.numero);
  }

  postOfficier(formData: Officier) {
    return this.http.post(this.serverUrl, formData);
  }

  putOfficier(formData: Officier) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteOfficier(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
