import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Deces } from 'src/app/models/deces.model';
import { DecesService } from 'src/app/services/deces.service';

@Component({
  selector: 'app-declaration-deces',
  templateUrl: './declaration-deces.component.html',
  styleUrls: ['./declaration-deces.component.css']
})
export class DeclarationDecesComponent implements OnInit {

  constructor(public service: DecesService, private toastr: ToastrManager)  { }

  etat: boolean = false;
  texte: string = "Invalide";

   popoverTitle: string = 'Confirmation...';
   popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
   cancelClicked: boolean = false;
 
   dtOptions: DataTables.Settings = {};

 ngOnInit() {
  //Chargement de la liste des types de declaration
  this.service.loadDeces()
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

populateDeces(td: Deces) {
 this.service.formData = Object.assign({}, td);
}

valideNaissance(td: Deces){
 this.etat = !this.etat;
 if(this.etat== true){
   this.texte = "Valide";
 }else{
   this.texte = "Invalide";
 }

}

deleteDeces(td: Deces) {
this.service.deleteDeces(td.id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === td.id);
  this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', ' Décès');
}
}
