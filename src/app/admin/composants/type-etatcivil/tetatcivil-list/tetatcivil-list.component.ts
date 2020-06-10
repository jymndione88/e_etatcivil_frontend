import { Component, OnInit } from '@angular/core';

import { Type_etatcivil } from 'src/app/models/type_etatcivil.model';
import { Type_etatcivilService } from 'src/app/services/type_etatcivil.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-tetatcivil-list',
  templateUrl: './tetatcivil-list.component.html',
  styleUrls: ['./tetatcivil-list.component.css']
})
export class TetatcivilListComponent implements OnInit {

  constructor(public service: Type_etatcivilService, private toastr: ToastrManager)  { }

  popoverTitle: string = 'Confirmation...';
  popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
  cancelClicked: boolean = false;

  typedeclarations: Type_etatcivil[];

  dtOptions: DataTables.Settings = {};

ngOnInit() {
 //Chargement de la liste des types de declaration
 this.service.loadListeType_etatcivil()
 .subscribe((data:any) => {
   this.service.list = data;
  });

//changement langue tableau
this.dtOptions = {
 pagingType: 'full_numbers',
// pageLength: 2,
 language: {
   "url": "../assets/langue/french.json",
   // "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
 }
};

}

populateTypedeclaration(td: Type_etatcivil) {
this.service.formData = Object.assign({}, td);
}

deleteTypedeclaration(id: number) {
this.service.deleteType_etatcivil(id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === id);
 this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Type Etat civil!');
}

}
