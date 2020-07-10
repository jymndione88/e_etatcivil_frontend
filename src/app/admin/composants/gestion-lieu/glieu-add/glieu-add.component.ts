import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Lieu_hospitalier } from 'src/app/models/lieu_hospitalier.model';
import { Lieu_hospitalierService } from 'src/app/services/lieu_hospitalier.service';
import { Etat_civil } from 'src/app/models/etat_civil.model';
import { Etat_civilService } from 'src/app/services/etat_civil.service';
import { NgForm } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';


@Component({
  selector: 'app-glieu-add',
  templateUrl: './glieu-add.component.html',
  styleUrls: ['./glieu-add.component.css']
})
export class GlieuAddComponent implements OnInit {

  listEtatcivil: Etat_civil;

  constructor(public service: Lieu_hospitalierService, private toastr: ToastrManager
    ,public serv_etatcivil: Etat_civilService) {  }

  ngOnInit() {
    this.resetForm();

    this.serv_etatcivil.loadListeEtat_civil().subscribe((data:any) => {
      this.listEtatcivil = data;
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
    libelle: ""
   };
 }

 ajoutTypedelaration(form: NgForm) {
 
   this.service.postLieu_hospitalier(form.value).subscribe((res)=>{
   
    form.value.id= res.id;
    let data= form.value;
    this.service.list.push(data);
     this.resetForm(form);
     this.toastr.successToastr('Ajouter avec succées!', 'Lieu hospitalier!');
  });
  
 }

 updateTypedelaration(form: NgForm) {

   this.service.putLieu_hospitalier(form.value).subscribe((res)=>{
  });

  var index = this.service.list.findIndex(item => item.id === form.value.id);
  let data= form.value;
  this.service.list.splice(index, 1, data);
   this.resetForm(form);
   this.toastr.warningToastr('Modifier avec succées!', 'Lieu hospitalier!');
 }

}
