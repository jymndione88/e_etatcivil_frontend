import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Internaute } from 'src/app/models/internaute.model';
import { InternauteService } from 'src/app/services/internaute.service';
import { NgForm } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';


@Component({
  selector: 'app-gutilisateur-add',
  templateUrl: './gutilisateur-add.component.html',
  styleUrls: ['./gutilisateur-add.component.css']
})
export class GutilisateurAddComponent implements OnInit {

  constructor(public service: InternauteService, private toastr: ToastrManager) {  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null){
     this.ajoutTypedelaration(form);
    }
     else{
       this.updateTypedelaration(form);
     }

   }

 resetForm(form?: NgForm) {
   if (form != null) form.resetForm();
   this.service.formData = {
     id: null,
     login: "",
     email: "",
     password: "",
     resetPassword: "",
     active: false,
     idPersonne: null,
     roles: null
   };
 }

 ajoutTypedelaration(form: NgForm) {
 
   this.service.postInternaute(form.value).subscribe((res)=>{
  });
  let data= form.value;
  this.service.list.push(data);
   this.resetForm(form);
   this.toastr.successToastr('Ajouter avec succées!', 'Utilisateur!');
 }

 updateTypedelaration(form: NgForm) {

   this.service.putInternaute(form.value).subscribe((res)=>{
  });

  var index = this.service.list.findIndex(item => item.id === form.value.id);
  let data= form.value;
  this.service.list.splice(index, 1, data);
   this.resetForm(form);
   this.toastr.warningToastr('Modifier avec succées!', 'Utilisateur!');
 }

}
