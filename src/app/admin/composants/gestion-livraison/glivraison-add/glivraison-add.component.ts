import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Mode_livraison } from 'src/app/models/mode_livraison.model';
import { Mode_livraisonService } from 'src/app/services/mode_livraison.service';
import { NgForm } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';


@Component({
  selector: 'app-glivraison-add',
  templateUrl: './glivraison-add.component.html',
  styleUrls: ['./glivraison-add.component.css']
})
export class GlivraisonAddComponent implements OnInit {

  constructor(public service: Mode_livraisonService, private toastr: ToastrManager) {  }

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
     mode: ""
   };
 }

 ajoutTypedelaration(form: NgForm) {
 
   this.service.postMode_livraison(form.value).subscribe((res)=>{

    form.value.id= res.id;
    let data= form.value;
    this.service.list.push(data);
     this.resetForm(form);
     this.toastr.successToastr('Ajouter avec succées!', 'Mode livraison!');
  });
 
 }

 updateTypedelaration(form: NgForm) {

   this.service.putMode_livraison(form.value).subscribe((res)=>{
  });

  var index = this.service.list.findIndex(item => item.id === form.value.id);
  let data= form.value;
  this.service.list.splice(index, 1, data);
   this.resetForm(form);
   this.toastr.warningToastr('Modifier avec succées!', 'Mode livraison!');
 }

}

