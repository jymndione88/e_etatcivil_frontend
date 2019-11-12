import { Declaration } from '../models/declaration.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  formData: Declaration;
  list: Declaration[];
  typec: Declaration;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Declaration";

  loadListeDeclaration() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Declaration[]);
  }

  getDeclarationBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Declarationbytype/"+id_type);
  }

  getDeclaration(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getDeclarationBynum(formData: Declaration) {
    return this.http.get(environment.apiURL+"/Declarationbynum/"+formData.numero);
  }

  postDeclaration(formData: Declaration) {
    return this.http.post(this.serverUrl, formData);
  }

  putDeclaration(formData: Declaration) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteDeclaration(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
