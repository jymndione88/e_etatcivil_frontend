import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Internaute } from 'src/app/models/internaute.model';
import { InternauteService } from 'src/app/services/internaute.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-gutilisateur-list',
  templateUrl: './gutilisateur-list.component.html',
  styleUrls: ['./gutilisateur-list.component.css']
})
export class GutilisateurListComponent implements OnInit {

  constructor(public service: InternauteService, private toastr: ToastrManager)  { }

  popoverTitle: string = 'Confirmation...';
  popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
  cancelClicked: boolean = false;

  typedeclarations: Internaute[];

  dtOptions: DataTables.Settings = {};

ngOnInit() {
 //Chargement de la liste des types de declaration
 this.service.loadListeInternaute()
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

populateTypedeclaration(td: Internaute) {
this.service.formData = Object.assign({}, td);
}

deleteTypedeclaration(id: number) {
this.service.deleteInternaute(id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === id);
 this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Utilisateur!');
}

}
