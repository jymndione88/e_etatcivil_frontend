import { Mariage } from '../models/mariage.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MariageService {

  formData: Mariage;
  list: Mariage[];
  typec: Mariage;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Mariage";

  loadListeMariage() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Mariage[]);
  }

  getMariageBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Mariagebytype/"+id_type);
  }

  getMariage(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getMariageBynum(formData: Mariage) {
    //return this.http.get(environment.apiURL+"/Mariagebynum/"+formData.numero);
  }

  postMariage(formData: Mariage) {
    return this.http.post(this.serverUrl, formData);
  }

  putMariage(formData: Mariage) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteMariage(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
