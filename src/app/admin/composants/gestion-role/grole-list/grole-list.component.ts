import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-grole-list',
  templateUrl: './grole-list.component.html',
  styleUrls: ['./grole-list.component.css']
})
export class GroleListComponent implements OnInit {

  constructor(public service: RoleService, private toastr: ToastrManager)  { }

  popoverTitle: string = 'Confirmation...';
  popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
  cancelClicked: boolean = false;

  typedeclarations: Role[];

  dtOptions: DataTables.Settings = {};

ngOnInit() {
 //Chargement de la liste des types de declaration
 this.service.loadListeRole()
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

populateTypedeclaration(td: Role) {
this.service.formData = Object.assign({}, td);
}

deleteTypedeclaration(id: number) {
this.service.deleteRole(id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === id);
 this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Role!');
}

}
