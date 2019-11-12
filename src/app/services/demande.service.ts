import { Demande } from '../models/demande.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  formData: Demande;
  list: Demande[];
  typec: Demande;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Demande";

  loadListeDemande() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Demande[]);
  }

  getDemandeBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Demandebytype/"+id_type);
  }

  getDemande(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getDemandeBynum(formData: Demande) {
    return this.http.get(environment.apiURL+"/Demandebynum/"+formData.numero);
  }

  postDemande(formData: Demande) {
    return this.http.post(this.serverUrl, formData);
  }

  putDemande(formData: Demande) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteDemande(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
