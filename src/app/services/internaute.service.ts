import { Internaute } from '../models/internaute.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InternauteService {

  formData: Internaute;
  list: Internaute[];
  typec: Internaute;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Internaute";

  loadListeInternaute() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Internaute[]);
  }

  getInternauteBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Internautebytype/"+id_type);
  }

  getInternaute(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getInternauteBynum(formData: Internaute) {
    //return this.http.get(environment.apiURL+"/Internautebynum/"+formData.numero);
  }

  postInternaute(formData: Internaute) {
    return this.http.post(this.serverUrl, formData);
  }

  putInternaute(formData: Internaute) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteInternaute(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
