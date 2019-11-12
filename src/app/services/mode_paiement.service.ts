import { Mode_paiement } from '../models/mode_paiement.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Mode_paiementService {

  formData: Mode_paiement;
  list: Mode_paiement[];
  typec: Mode_paiement;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Mode_paiement";

  loadListeMode_paiement() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Mode_paiement[]);
  }

  getMode_paiementBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Mode_paiementbytype/"+id_type);
  }

  getMode_paiement(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getMode_paiementBynum(formData: Mode_paiement) {
   // return this.http.get(environment.apiURL+"/Mode_paiementbynum/"+formData.numero);
  }

  postMode_paiement(formData: Mode_paiement) {
    return this.http.post(this.serverUrl, formData);
  }

  putMode_paiement(formData: Mode_paiement) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteMode_paiement(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
