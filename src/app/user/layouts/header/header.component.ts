import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Internaute } from './../../../models/internaute.model';
import { SignupRequest } from '../../../models/signup_request.model';
import { InternauteService } from './../../../services/internaute.service';
import { TokenStorageService } from './../../../services/token-storage.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  internaute: Internaute;
  inscri: SignupRequest;
  isLoggedIn = false;
  private roles: string[];
  log: string;

  constructor(private serv_internaute: InternauteService
    , private toastr: ToastrManager, private tokenStorage: TokenStorageService
    ,private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;
      this.log = user.username;
    }
  }

  @ViewChild('close') private close: ElementRef;
  public hideModel() {
      this.close.nativeElement.click();      
  }
  
  reloadPage() {
    window.location.reload();
  }


  login(form: NgForm){
    //console.log("login");
    //console.log(form.value);

     this.internaute= new Internaute();
     this.internaute.email= form.value.logEmail;
     this.internaute.password= form.value.logPassword;
     this.internaute.login= "";
    
     this.serv_internaute.login(this.internaute).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        this.resetForm(form);
        this.toastr.successToastr('Connecté avec succées!', 'Connexion compte!');

        this.reloadPage();

      },
      err => {
        console.log(err.error.message);
        this.toastr.errorToastr('Email ou mot de passe incorrect!', 'Connexion compte!');
      }
    ); 

  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
  }

  inscription(form: NgForm){
    console.log("inscription");
   // console.log(form.value);

     this.inscri= new SignupRequest();
     this.inscri.login= form.value.incriIdentifiant;
     this.inscri.email= form.value.incriEmail;
     this.inscri.password= form.value.incriPassword;

     this.inscri.role= ["User"];

     this.serv_internaute.inscrire(this.inscri).subscribe((res)=>{
    });

     this.resetForm(form);
     this.toastr.successToastr('Compte crée avec succées!', 'Création compte!');
     this.hideModel();

  }


}
