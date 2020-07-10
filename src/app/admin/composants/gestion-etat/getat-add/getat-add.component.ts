import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Etat_civil } from 'src/app/models/etat_civil.model';
import { Type_etatcivil } from 'src/app/models/type_etatcivil.model';
import { Commune } from 'src/app/models/commune.model';
import { Etat_civilService } from 'src/app/services/etat_civil.service';
import { CommuneService } from 'src/app/services/commune.service';
import { Type_etatcivilService } from 'src/app/services/type_etatcivil.service';
import { NgForm } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { from } from 'rxjs';



@Component({
  selector: 'app-getat-add',
  templateUrl: './getat-add.component.html',
  styleUrls: ['./getat-add.component.css']
})
export class GetatAddComponent implements OnInit {

  listCom: Commune;
  listTypeetat: Type_etatcivil;

  constructor(public service: Etat_civilService, private toastr: ToastrManager
    ,public serv_com: CommuneService
    ,public serv_typeetat: Type_etatcivilService) {  }

  ngOnInit() {
    this.resetForm();

    this.serv_com.loadListeCommune().subscribe((data:any) => {
      this.listCom = data;
     });

     this.serv_typeetat.loadListeType_etatcivil().subscribe((data:any) => {;
      this.listTypeetat = data;
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
    idTypeEtatCivil: null,
    idCommune: null
   };
 }

 ajoutTypedelaration(form: NgForm) {
 
   this.service.postEtat_civil(form.value).subscribe((res)=>{

    form.value.id= res.id;
    let data= form.value;
    this.service.list.push(data);
     this.resetForm(form);
     this.toastr.successToastr('Ajouter avec succées!', 'Etat civil!');
  });
 
 }

 updateTypedelaration(form: NgForm) {

   this.service.putEtat_civil(form.value).subscribe((res)=>{
  });

  var index = this.service.list.findIndex(item => item.id === form.value.id);
  let data= form.value;
  this.service.list.splice(index, 1, data);
   this.resetForm(form);
   this.toastr.warningToastr('Modifier avec succées!', 'Etat civil!');
 }

}
