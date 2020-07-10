import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { TypeDeclarations } from 'src/app/models/type_declaration.model';
import { CommuneService } from 'src/app/services/commune.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Commune } from 'src/app/models/commune.model';

@Component({
  selector: 'app-gcommune-list',
  templateUrl: './gcommune-list.component.html',
  styleUrls: ['./gcommune-list.component.css']
})
export class GcommuneListComponent implements OnInit {

  constructor(public service: CommuneService, private toastr: ToastrManager)  { }

    popoverTitle: string = 'Confirmation...';
    popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
    cancelClicked: boolean = false;
  
    communes: Commune[];
  
    dtOptions: DataTables.Settings = {};

  ngOnInit() {
   //Chargement de la liste des types de declaration
   this.service.loadListeCommune()
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

populateTypedeclaration(td: Commune) {
  this.service.formData = Object.assign({}, td);
}

deleteTypedeclaration(id: number) {
this.service.deleteCommune(id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === id);
   this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Commune!');
}

}
