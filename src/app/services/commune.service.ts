import { Commune } from '../models/commune.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  formData: Commune;
  list: Commune[];
  typec: Commune;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/commune";

  loadListeCommune() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Commune[]);
  }

  getCommuneBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/communebytype/"+id_type);
  }

  getCommune(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getCommuneBynum(formData: Commune) {
   // return this.http.get(environment.apiURL+"/Communebynum/"+formData.numero);
  }

  postCommune(formData: Commune) {
    return this.http.post(this.serverUrl, formData);
  }

  putCommune(formData: Commune) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteCommune(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
