import { Arrondissement } from '../models/arrondissement.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArrondissementService {

  formData: Arrondissement;
  list: Arrondissement[];
  typec: Arrondissement;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Arrondissement";

  loadListeArrondissement() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Arrondissement[]);
  }

  getArrondissementBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Arrondissementbytype/"+id_type);
  }

  getArrondissement(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getArrondissementBynum(formData: Arrondissement) {
   // return this.http.get(environment.apiURL+"/Arrondissementbynum/"+formData.numero);
  }

  postArrondissement(formData: Arrondissement) {
    return this.http.post(this.serverUrl, formData);
  }

  putArrondissement(formData: Arrondissement) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteArrondissement(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
