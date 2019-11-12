import { Facture } from '../models/facture.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  formData: Facture;
  list: Facture[];
  typec: Facture;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Facture";

  loadListeFacture() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Facture[]);
  }

  getFactureBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Facturebytype/"+id_type);
  }

  getFacture(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getFactureBynum(formData: Facture) {
    //return this.http.get(environment.apiURL+"/Facturebynum/"+formData.numero);
  }

  postFacture(formData: Facture) {
    return this.http.post(this.serverUrl, formData);
  }

  putFacture(formData: Facture) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteFacture(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
