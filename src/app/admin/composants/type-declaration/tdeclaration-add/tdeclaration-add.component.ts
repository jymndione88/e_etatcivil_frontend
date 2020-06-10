import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { TypeDeclarations } from 'src/app/models/type_declaration.model';
import { Type_declarationService } from 'src/app/services/type_declaration.service';
import { NgForm } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';


@Component({
  selector: 'app-tdeclaration-add',
  templateUrl: './tdeclaration-add.component.html',
  styleUrls: ['./tdeclaration-add.component.css']
})
export class TdeclarationAddComponent implements OnInit {

  constructor(public service: Type_declarationService, private toastr: ToastrManager) {  }

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
     type: ""
   };
 }

 ajoutTypedelaration(form: NgForm) {
 
   this.service.postType_declaration(form.value).subscribe((res)=>{
  });
  let data= form.value;
  this.service.list.push(data);
   this.resetForm(form);
   this.toastr.successToastr('Ajouter avec succées!', 'Type déclaration!');
 }

 updateTypedelaration(form: NgForm) {

   this.service.putType_declaration(form.value).subscribe((res)=>{
  });

  var index = this.service.list.findIndex(item => item.id === form.value.id);
  let data= form.value;
  this.service.list.splice(index, 1, data);
   this.resetForm(form);
   this.toastr.warningToastr('Modifier avec succées!', 'Type déclaration!');
 }

}
