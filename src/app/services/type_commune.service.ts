import { Type_commune } from '../models/type_commune.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Type_communeService {

  formData: Type_commune;
  list: Type_commune[];
  typec: Type_commune;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Type_commune";

  loadListeType_commune() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Type_commune[]);
  }

  getType_communeBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Type_communebytype/"+id_type);
  }

  getType_commune(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getType_communeBynum(formData: Type_commune) {
   // return this.http.get(environment.apiURL+"/Type_communebynum/"+formData.numero);
  }

  postType_commune(formData: Type_commune) {
    return this.http.post(this.serverUrl, formData);
  }

  putType_commune(formData: Type_commune) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteType_commune(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
