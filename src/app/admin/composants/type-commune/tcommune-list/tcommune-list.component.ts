import { Component, OnInit } from '@angular/core';

import { Type_commune } from 'src/app/models/type_commune.model';
import { Type_communeService } from 'src/app/services/type_commune.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-tcommune-list',
  templateUrl: './tcommune-list.component.html',
  styleUrls: ['./tcommune-list.component.css']
})
export class TcommuneListComponent implements OnInit {

  constructor(public service: Type_communeService, private toastr: ToastrManager)  { }

    popoverTitle: string = 'Confirmation...';
    popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
    cancelClicked: boolean = false;
  
    typedeclarations: Type_commune[];
  
    dtOptions: DataTables.Settings = {};

  ngOnInit() {
   //Chargement de la liste des types de declaration
   this.service.loadListeType_commune()
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

populateTypedeclaration(td: Type_commune) {
  this.service.formData = Object.assign({}, td);
}

deleteTypedeclaration(id: number) {
this.service.deleteType_commune(id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === id);
   this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Type commune!');
}

}
