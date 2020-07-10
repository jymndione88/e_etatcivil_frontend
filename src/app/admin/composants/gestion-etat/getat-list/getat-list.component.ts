import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Etat_civil } from 'src/app/models/etat_civil.model';
import { Etat_civilService } from 'src/app/services/etat_civil.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-getat-list',
  templateUrl: './getat-list.component.html',
  styleUrls: ['./getat-list.component.css']
})
export class GetatListComponent implements OnInit {

  constructor(public service: Etat_civilService, private toastr: ToastrManager)  { }

  popoverTitle: string = 'Confirmation...';
  popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
  cancelClicked: boolean = false;

  typedeclarations: Etat_civil[];

  dtOptions: DataTables.Settings = {};

ngOnInit() {
 //Chargement de la liste des types de declaration
 this.service.loadListeEtat_civil()
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

populateTypedeclaration(td: Etat_civil) {
this.service.formData = Object.assign({}, td);
}

deleteTypedeclaration(id: number) {
this.service.deleteEtat_civil(id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === id);
 this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Etat civil!');
}

}
