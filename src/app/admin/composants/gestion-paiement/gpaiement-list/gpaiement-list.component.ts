import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Mode_paiement } from 'src/app/models/mode_paiement.model';
import { Mode_paiementService } from 'src/app/services/mode_paiement.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-gpaiement-list',
  templateUrl: './gpaiement-list.component.html',
  styleUrls: ['./gpaiement-list.component.css']
})
export class GpaiementListComponent implements OnInit {

  constructor(public service: Mode_paiementService, private toastr: ToastrManager)  { }

    popoverTitle: string = 'Confirmation...';
    popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
    cancelClicked: boolean = false;
  
    typedeclarations: Mode_paiement[];
  
    dtOptions: DataTables.Settings = {};

  ngOnInit() {
   //Chargement de la liste des types de declaration
   this.service.loadListeMode_paiement()
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

populateTypedeclaration(td: Mode_paiement) {
  this.service.formData = Object.assign({}, td);
}

deleteTypedeclaration(id: number) {
this.service.deleteMode_paiement(id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === id);
   this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Mode paiement!');
}

}
