import { Role_officer } from '../models/role_officier.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Role_officerService {

  formData: Role_officer;
  list: Role_officer[];
  typec: Role_officer;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Role_officer";

  loadListeRole_officer() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Role_officer[]);
  }

  getRole_officerBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Role_officerbytype/"+id_type);
  }

  getRole_officer(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getRole_officerBynum(formData: Role_officer) {
   // return this.http.get(environment.apiURL+"/Role_officerbynum/"+formData.numero);
  }

  postRole_officer(formData: Role_officer) {
    return this.http.post(this.serverUrl, formData);
  }

  putRole_officer(formData: Role_officer) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteRole_officer(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
