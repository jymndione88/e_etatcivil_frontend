import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Type_commune } from 'src/app/models/type_commune.model';
import { Type_communeService } from 'src/app/services/type_commune.service';
import { NgForm } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';

@Component({
  selector: 'app-tcommune-add',
  templateUrl: './tcommune-add.component.html',
  styleUrls: ['./tcommune-add.component.css']
})
export class TcommuneAddComponent implements OnInit {

  constructor(public service: Type_communeService, private toastr: ToastrManager) {  }

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
 
   this.service.postType_commune(form.value).subscribe((res)=>{
  });
  let data= form.value;
  this.service.list.push(data);
   this.resetForm(form);
   this.toastr.successToastr('Ajouter avec succées!', 'Type commune!');
 }

 updateTypedelaration(form: NgForm) {

   this.service.putType_commune(form.value).subscribe((res)=>{
  });

  var index = this.service.list.findIndex(item => item.id === form.value.id);
  let data= form.value;
  this.service.list.splice(index, 1, data);
   this.resetForm(form);
   this.toastr.warningToastr('Modifier avec succées!', 'Type commune!');
 }

}
