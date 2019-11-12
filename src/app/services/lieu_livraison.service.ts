import { Lieu_livraison } from '../models/lieu_livraison.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Lieu_livraisonService {

  formData: Lieu_livraison;
  list: Lieu_livraison[];
  typec: Lieu_livraison;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Lieu_livraison";

  loadListeLieu_livraison() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Lieu_livraison[]);
  }

  getLieu_livraisonBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Lieu_livraisonbytype/"+id_type);
  }

  getLieu_livraison(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getLieu_livraisonBynum(formData: Lieu_livraison) {
   // return this.http.get(environment.apiURL+"/Lieu_livraisonbynum/"+formData.numero);
  }

  postLieu_livraison(formData: Lieu_livraison) {
    return this.http.post(this.serverUrl, formData);
  }

  putLieu_livraison(formData: Lieu_livraison) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteLieu_livraison(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
