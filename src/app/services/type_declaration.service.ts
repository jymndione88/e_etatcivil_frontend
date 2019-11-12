import { Type_declaration } from '../models/type_declaration.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Type_declarationService {

  formData: Type_declaration;
  list: Type_declaration[];
  typec: Type_declaration;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Type_declaration";

  loadListeType_declaration() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Type_declaration[]);
  }

  getType_declarationBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Type_declarationbytype/"+id_type);
  }

  getType_declaration(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getType_declarationBynum(formData: Type_declaration) {
   // return this.http.get(environment.apiURL+"/Type_declarationbynum/"+formData.numero);
  }

  postType_declaration(formData: Type_declaration) {
    return this.http.post(this.serverUrl, formData);
  }

  putType_declaration(formData: Type_declaration) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteType_declaration(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
