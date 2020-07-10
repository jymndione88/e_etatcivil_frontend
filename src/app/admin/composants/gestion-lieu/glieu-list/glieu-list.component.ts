import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Lieu_hospitalier } from 'src/app/models/lieu_hospitalier.model';
import { Lieu_hospitalierService } from 'src/app/services/lieu_hospitalier.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-glieu-list',
  templateUrl: './glieu-list.component.html',
  styleUrls: ['./glieu-list.component.css']
})
export class GlieuListComponent implements OnInit {

  constructor(public service: Lieu_hospitalierService, private toastr: ToastrManager)  { }

  popoverTitle: string = 'Confirmation...';
  popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
  cancelClicked: boolean = false;

  typedeclarations: Lieu_hospitalier[];

  dtOptions: DataTables.Settings = {};

ngOnInit() {
 //Chargement de la liste des types de declaration
 this.service.loadListeLieu_hospitalier()
 .subscribe((data:any) => {
   console.log(data);
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

populateTypedeclaration(td: Lieu_hospitalier) {
this.service.formData = Object.assign({}, td);
}

deleteTypedeclaration(id: number) {
this.service.deleteLieu_hospitalier(id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === id);
 this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Lieu hospitalier!');
}

}
