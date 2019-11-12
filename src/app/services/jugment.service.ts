import { Jugement } from '../models/jugement.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JugementService {

  formData: Jugement;
  list: Jugement[];
  typec: Jugement;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Jugement";

  loadListeJugement() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Jugement[]);
  }

  getJugementBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Jugementbytype/"+id_type);
  }

  getJugement(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getJugementBynum(formData: Jugement) {
    return this.http.get(environment.apiURL+"/Jugementbynum/"+formData.numero);
  }

  postJugement(formData: Jugement) {
    return this.http.post(this.serverUrl, formData);
  }

  putJugement(formData: Jugement) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteJugement(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
