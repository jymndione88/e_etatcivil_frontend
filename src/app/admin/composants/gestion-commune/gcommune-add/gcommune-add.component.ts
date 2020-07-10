import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Departement } from 'src/app/models/departement.model';
import { CommuneService } from 'src/app/services/commune.service';
import { DepartementService } from 'src/app/services/departement.service';
import { NgForm } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';


@Component({
  selector: 'app-gcommune-add',
  templateUrl: './gcommune-add.component.html',
  styleUrls: ['./gcommune-add.component.css']
})
export class GcommuneAddComponent implements OnInit {

  listArron: Departement;

  constructor(public service: CommuneService, private toastr: ToastrManager
    ,public serv_arron_: DepartementService) {  }

  ngOnInit() {
    this.resetForm();

    this.serv_arron_.loadListeDepartement().subscribe((data:any) => {
      this.listArron = data;
     });

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
    libelle: "",
    idDepartement: null
    
   };
 }

 ajoutTypedelaration(form: NgForm) {
 
   this.service.postCommune(form.value).subscribe((res)=>{
     
  form.value.id= res.id;
  let data= form.value;
  this.service.list.push(data);
   this.resetForm(form);
   this.toastr.successToastr('Ajouter avec succées!', 'Commune!');
  });

 }

 updateTypedelaration(form: NgForm) {

   this.service.putCommune(form.value).subscribe((res)=>{
  });

  var index = this.service.list.findIndex(item => item.id === form.value.id);
  let data= form.value;
  this.service.list.splice(index, 1, data);
   this.resetForm(form);
   this.toastr.warningToastr('Modifier avec succées!', 'Commune!');
 }

}

