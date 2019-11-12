import { Livraison } from '../models/livraison.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  formData: Livraison;
  list: Livraison[];
  typec: Livraison;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Livraison";

  loadListeLivraison() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Livraison[]);
  }

  getLivraisonBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Livraisonbytype/"+id_type);
  }

  getLivraison(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getLivraisonBynum(formData: Livraison) {
    //return this.http.get(environment.apiURL+"/Livraisonbynum/"+formData.numero);
  }

  postLivraison(formData: Livraison) {
    return this.http.post(this.serverUrl, formData);
  }

  putLivraison(formData: Livraison) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteLivraison(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
