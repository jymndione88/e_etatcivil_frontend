import { Demande } from '../models/demande.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  formData: Demande;
  list: Demande[];
  typec: Demande;

  constructor(private http: HttpClient
    ) { }
    readonly serverUrl = environment.apiURL + "/Demande";
    readonly serverUrlMail = environment.apiURL+"/sendmail";
    
    sendEmail(data: Email) {
      return this.http.get(this.serverUrlMail + '/' + data.mail + '/' + data.objet + '/' + data.body).
      pipe(
         map((data: any) => {
           console.log("entre");
           console.log(data);
           return data;
         }), catchError( error => {
           return throwError( 'erreur: ' + error );
         })
      )
    }

  loadListeDemandeParNature(nat: string) {
    return this.http.get(this.serverUrl + '/' + nat).
    pipe(
       map((data: Demande[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

 // getDemandeBytype(id_type: number) {
   // return this.http.get(environment.apiURL+"/Demandebytype/"+id_type);
 // }

  getDemande(id: number) {
    return this.http.get(this.serverUrl + '/' + id).
    pipe(
       map((data: Demande) => {
        return data;
       }), catchError( error => {
        return throwError( 'Erreur:' + error );
       })
    )
  }

 // getDemandeBynum(formData: Demande) {
   // return this.http.get(environment.apiURL+"/Demandebynum/"+formData.numero);
  //}

  postDemande(formData: Demande) {
    return this.http.post(this.serverUrl, formData).
    pipe(
       map((data: any) => {
         return data;
       }), catchError( error => {
         return throwError( 'erreur: ' + error );
       })
    )
  }

  putDemande(formData: Demande) {
    return this.http.put(this.serverUrl + '/' + formData.id, formData).
    pipe(
       map((data:any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

  deleteDemande(id: number) {
    return this.http.delete(this.serverUrl + '/' + id).
    pipe(
       map((data: any) => {
         return data;
       }), catchError( error => {
         return throwError( 'Erreur:' + error );
       })
    )
  }

}
