import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { TypeDeclarations } from 'src/app/models/type_declaration.model';
import { Type_declarationService } from 'src/app/services/type_declaration.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-tdeclaration-list',
  templateUrl: './tdeclaration-list.component.html',
  styleUrls: ['./tdeclaration-list.component.css']
})
export class TdeclarationListComponent implements OnInit {

  constructor(public service: Type_declarationService, private toastr: ToastrManager)  { }

    popoverTitle: string = 'Confirmation...';
    popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
    cancelClicked: boolean = false;
  
    typedeclarations: TypeDeclarations[];
  
    dtOptions: DataTables.Settings = {};

  ngOnInit() {
   //Chargement de la liste des types de declaration
   this.service.loadListeType_declaration()
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

populateTypedeclaration(td: TypeDeclarations) {
  this.service.formData = Object.assign({}, td);
}

deleteTypedeclaration(id: number) {
this.service.deleteType_declaration(id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === id);
   this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Type déclaration!');
}

}
