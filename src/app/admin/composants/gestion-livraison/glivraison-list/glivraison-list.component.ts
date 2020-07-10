import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Mode_livraison } from 'src/app/models/mode_livraison.model';
import { Mode_livraisonService } from 'src/app/services/mode_livraison.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-glivraison-list',
  templateUrl: './glivraison-list.component.html',
  styleUrls: ['./glivraison-list.component.css']
})
export class GlivraisonListComponent implements OnInit {

  constructor(public service: Mode_livraisonService, private toastr: ToastrManager)  { }

    popoverTitle: string = 'Confirmation...';
    popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
    cancelClicked: boolean = false;
  
    typedeclarations: Mode_livraison[];
  
    dtOptions: DataTables.Settings = {};

  ngOnInit() {
   //Chargement de la liste des types de declaration
   this.service.loadListeMode_livraison()
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

populateTypedeclaration(td: Mode_livraison) {
  this.service.formData = Object.assign({}, td);
}

deleteTypedeclaration(id: number) {
this.service.deleteMode_livraison(id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === id);
   this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Mode livraison!');
}

}
