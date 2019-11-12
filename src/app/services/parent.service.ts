import { Parent } from '../models/parent.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  formData: Parent;
  list: Parent[];
  typec: Parent;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Parent";

  loadListeParent() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Parent[]);
  }

  getParentBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Parentbytype/"+id_type);
  }

  getParent(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getParentBynum(formData: Parent) {
   // return this.http.get(environment.apiURL+"/Parentbynum/"+formData.numero);
  }

  postParent(formData: Parent) {
    return this.http.post(this.serverUrl, formData);
  }

  putParent(formData: Parent) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteParent(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
