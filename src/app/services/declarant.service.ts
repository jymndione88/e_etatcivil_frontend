import { Declarant } from '../models/declarant.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclarantService {

  formData: Declarant;
  list: Declarant[];
  typec: Declarant;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Declarant";

  loadListeDeclarant() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Declarant[]);
  }

  getDeclarantBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Declarantbytype/"+id_type);
  }

  getDeclarant(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getDeclarantBynum(formData: Declarant) {
   // return this.http.get(environment.apiURL+"/Declarantbynum/"+formData.numero);
  }

  postDeclarant(formData: Declarant) {
    return this.http.post(this.serverUrl, formData);
  }

  putDeclarant(formData: Declarant) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteDeclarant(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
