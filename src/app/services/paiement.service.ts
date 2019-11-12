import { Paiement } from '../models/paiement.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  formData: Paiement;
  list: Paiement[];
  typec: Paiement;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Paiement";

  loadListePaiement() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Paiement[]);
  }

  getPaiementBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Paiementbytype/"+id_type);
  }

  getPaiement(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getPaiementBynum(formData: Paiement) {
   // return this.http.get(environment.apiURL+"/Paiementbynum/"+formData.numero);
  }

  postPaiement(formData: Paiement) {
    return this.http.post(this.serverUrl, formData);
  }

  putPaiement(formData: Paiement) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deletePaiement(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
