import { Type_etatcivil } from '../models/type_etatcivil.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Type_etatcivilService {

  formData: Type_etatcivil;
  list: Type_etatcivil[];
  typec: Type_etatcivil;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/typeetatcivil";

  loadListeType_etatcivil() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Type_etatcivil[]);
  }

  getType_etatcivilBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/typeetatcivilbytype/"+id_type);
  }

  getType_etatcivil(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getType_etatcivilBynum(formData: Type_etatcivil) {
   // return this.http.get(environment.apiURL+"/Type_etatcivilbynum/"+formData.numero);
  }

  postType_etatcivil(formData: Type_etatcivil) {
    return this.http.post(this.serverUrl, formData);
  }

  putType_etatcivil(formData: Type_etatcivil) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteType_etatcivil(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
