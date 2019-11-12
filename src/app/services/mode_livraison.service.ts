import { Mode_livraison } from '../models/mode_livraison.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Mode_livraisonService {

  formData: Mode_livraison;
  list: Mode_livraison[];
  typec: Mode_livraison;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Mode_livraison";

  loadListeMode_livraison() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Mode_livraison[]);
  }

  getMode_livraisonBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Mode_livraisonbytype/"+id_type);
  }

  getMode_livraison(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getMode_livraisonBynum(formData: Mode_livraison) {
   // return this.http.get(environment.apiURL+"/Mode_livraisonbynum/"+formData.numero);
  }

  postMode_livraison(formData: Mode_livraison) {
    return this.http.post(this.serverUrl, formData);
  }

  putMode_livraison(formData: Mode_livraison) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteMode_livraison(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
