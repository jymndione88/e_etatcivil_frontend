import { Etat_facture } from '../models/etat_facture.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Etat_factureService {

  formData: Etat_facture;
  list: Etat_facture[];
  typec: Etat_facture;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Etat_facture";

  loadListeEtat_facture() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Etat_facture[]);
  }

  getEtat_factureBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Etat_facturebytype/"+id_type);
  }

  getEtat_facture(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getEtat_factureBynum(formData: Etat_facture) {
    //return this.http.get(environment.apiURL+"/Etat_facturebynum/"+formData.numero);
  }

  postEtat_facture(formData: Etat_facture) {
    return this.http.post(this.serverUrl, formData);
  }

  putEtat_facture(formData: Etat_facture) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteEtat_facture(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
