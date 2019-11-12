import { Region } from '../models/region.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  formData: Region;
  list: Region[];
  typec: Region;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Region";

  loadListeRegion() {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(res => this.list = res as Region[]);
  }

  getRegionBytype(id_type: number) {
    return this.http.get(environment.apiURL+"/Regionbytype/"+id_type);
  }

  getRegion(id: number) {
    return this.http.get(`${this.serverUrl}/${id}`);
  }

  getRegionBynum(formData: Region) {
   // return this.http.get(environment.apiURL+"/Regionbynum/"+formData.numero);
  }

  postRegion(formData: Region) {
    return this.http.post(this.serverUrl, formData);
  }

  putRegion(formData: Region) {
    return this.http.put(`${this.serverUrl}/${formData.id}`, formData);
  }

  deleteRegion(id: number) {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }

}
