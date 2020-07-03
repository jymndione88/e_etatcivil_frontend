import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TokenStorageService } from './../../../services/token-storage.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Internaute } from './../../../models/internaute.model';
import { SignupRequest } from '../../../models/signup_request.model';
import { InternauteService } from './../../../services/internaute.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  internaute: Internaute;
  inscri: SignupRequest;
  admin: boolean= false;
  isLoggedIn = false;
  private roles: string[];
  log: string;

  constructor(private router: Router
    ,private tokenStorage: TokenStorageService, private toastr: ToastrManager
    ,private serv_internaute: InternauteService) { }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
  }

  reloadPage() {
    window.location.reload();
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
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
       this.log = this.tokenStorage.getUser().username;

       this.resetForm(form);
 
    var i;
    for (i = 0; i < this.roles.length; i++) {
      if(this.roles.toString() == "ROLE_ADMIN") {
        this.admin= true;
      }
    }

    console.log(this.admin);
    if(this.admin){
      console.log("admin");

      this.toastr.successToastr('Connecté avec succées!', 'Connexion admin!');
      this.router.navigate(['layoutadmin']);
  }else{
    this.toastr.successToastr('Vous etes pas autorisé a accéder!', 'Connexion admin!');
  }
     
},
err => {
  console.log(err.error.message);
  this.toastr.errorToastr('Email ou mot de passe incorrect!', 'Connexion compte!');
}
); 

}

}
