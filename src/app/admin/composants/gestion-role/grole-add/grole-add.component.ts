import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role.service';
import { NgForm } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';


@Component({
  selector: 'app-grole-add',
  templateUrl: './grole-add.component.html',
  styleUrls: ['./grole-add.component.css']
})
export class GroleAddComponent implements OnInit {

  constructor(public service: RoleService, private toastr: ToastrManager) {  }

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
     code: "",
     libelle: ""
   };
 }

 ajoutTypedelaration(form: NgForm) {
 
   this.service.postRole(form.value).subscribe((res)=>{

    form.value.id= res.id;
    let data= form.value;
  this.service.list.push(data);
   this.resetForm(form);
   this.toastr.successToastr('Ajouter avec succées!', 'Role!');
  });
  
 }

 updateTypedelaration(form: NgForm) {

   this.service.putRole(form.value).subscribe((res)=>{
  });

  var index = this.service.list.findIndex(item => item.id === form.value.id);
  let data= form.value;
  this.service.list.splice(index, 1, data);
   this.resetForm(form);
   this.toastr.warningToastr('Modifier avec succées!', 'Role!');
 }

}

