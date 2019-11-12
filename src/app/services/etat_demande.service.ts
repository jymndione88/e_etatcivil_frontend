import { Etat_demande } from '../models/etat_demande.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Etat_demandeService {

  formData: Etat_demande;
  list: Etat_demande[];
  typec: Etat_demande;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Etat_demande";

  loadListeEtat_demande() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Etat_demande[]);
  }

  getEtat_demandeBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Etat_demandebytype/"+id_type);
  }

  getEtat_demande(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getEtat_demandeBynum(formData: Etat_demande) {
   // return this.http.get(environment.apiURL+"/Etat_demandebynum/"+formData.numero);
  }

  postEtat_demande(formData: Etat_demande) {
    return this.http.post(this.serverUrl, formData);
  }

  putEtat_demande(formData: Etat_demande) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteEtat_demande(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
