import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Demande } from 'src/app/models/demande.model';
import { DemandeService } from 'src/app/services/demande.service';
import { Email } from 'src/app/models/email.model';

@Component({
  selector: 'app-demande-naissance',
  templateUrl: './demande-naissance.component.html',
  styleUrls: ['./demande-naissance.component.css']
})
export class DemandeNaissanceComponent implements OnInit {

  constructor(public service: DemandeService, private toastr: ToastrManager)  { }

  etat: boolean = false;
  texte: string = "Invalide";
  descript: string = "";

  data: Email;

   popoverTitle: string = 'Confirmation...';
   popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
   cancelClicked: boolean = false;
 
   dtOptions: DataTables.Settings = {};

 ngOnInit() {
  //Chargement de la liste des types de declaration
  this.service.loadListeDemandeParNature("naissance")
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

populateDemande(td: Demande) {
 this.service.formData = Object.assign({}, td);
}

valideDemande(td: Demande){
 this.etat = !this.etat;
 if(this.etat== true){
   this.texte = "Valide";
 //  this.descript = "Nous venons par la présente, vous annoncer que votre demande de déclaration de naissance a été validé sous le numéro de registre : " + td.idDeclaration.numero + " <br> Vous pouvez dés a présent procéder à une demande d'acte de naissance. ";
 }else{
   this.texte = "Invalide";
 //  this.descript = "Nous avons le régrés de vous annoncer que votre demande de déclaration de naissance numéro : " + td.idDeclaration.numero + " a été invalidé <br> Pour la raison suivante : " + td.idDeclaration.numero;
 
 }

 console.log("si");
 console.log(td);
 //this.data.mail= td.idDeclaration.idInternaute.email;

 if (this.texte == "Valide"){
   this.data.objet= "Validation déclaration de naissance";
 }else{
   this.data.objet= "Validation déclaration de naissance";
 }

 //this.data.body= "<h3>Bonjour cher "+ td.idDeclaration.idInternaute.email + "!</h3><br><h5>" + this.descript + "</h5> <br> Cordialement!";
 this.data.attach= "";

 console.log(this.data);
 this.service.sendEmail(this.data).subscribe((res)=>{
 });
 this.toastr.errorToastr('Envoi acte par email réussi!', ' Demande acte');

}

deleteDemande(td: Demande) {
this.service.deleteDemande(td.id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === td.id);
  this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Demande acte');
}

}
