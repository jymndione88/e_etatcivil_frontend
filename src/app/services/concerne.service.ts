import { Concerne } from '../models/concerne.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConcerneService {

  formData: Concerne;
  list: Concerne[];
  typec: Concerne;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Concerne";

  loadListeConcerne() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Concerne[]);
  }

  getConcerneBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Concernebytype/"+id_type);
  }

  getConcerne(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getConcerneBynum(formData: Concerne) {
   // return this.http.get(environment.apiURL+"/Concernebynum/"+formData.numero);
  }

  postConcerne(formData: Concerne) {
    return this.http.post(this.serverUrl, formData);
  }

  putConcerne(formData: Concerne) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteConcerne(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
