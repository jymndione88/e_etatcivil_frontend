import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Demande } from 'src/app/models/demande.model';
import { DemandeService } from 'src/app/services/demande.service';
import { Email } from 'src/app/models/email.model';
import * as jspdf from 'jspdf';
import { DatePipe } from '@angular/common';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-demande-mariage',
  templateUrl: './demande-mariage.component.html',
  styleUrls: ['./demande-mariage.component.css']
})
export class DemandeMariageComponent implements OnInit {

  constructor(public service: DemandeService, private toastr: ToastrManager)  { }

  d: Demande;
  texte: string = "Invalide";
  descript: string = "";

  data: Email;
  pipe = new DatePipe('en-US');

   popoverTitle: string = 'Confirmation...';
   popoverMessage: string = 'Voulez-vous vraiment supprimer... ?';
   cancelClicked: boolean = false;
 
   dtOptions: DataTables.Settings = {};

 ngOnInit() {
  ////Chargement de la liste des types de declaration
  this.service.loadListeDemandeParNature("naissance")
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
 
// generer pdf
public downloadPdf(td: Demande) {

  let doc= new jspdf();

  doc.setLineWidth(0.5);

doc.rect(10, 10, 100, 50);
doc.rect(110, 10, 95, 50);

doc.text("REPUBLIQUE DU SENEGAL", 15, 20);
doc.line(30, 25, 70, 25);
doc.text("REGION DE ".concat(td.idNaissance.idDeclaration.idOfficier.idEtatCivil.idCommune.idArrondissement.idDepartement.idRegion.libelle), 20, 35);
doc.line(30, 40, 70, 40);
doc.fromHTML("<b>COMMUNE d'ARRONDISSEMENT</b>", 15, 45)
//doc.fromHTML("<b>".concat(td.idCommune.idArrondissement.libelle).concat( "</b>") , 40, 50);

doc.text("REPUBLIQUE DU SENEGAL", 120, 20);
doc.text("UN PEUPLE - UN BUT - UNE FOI", 115, 25);
doc.fromHTML("<b>ETAT - CIVIL</b>", 150, 30)
doc.fromHTML("<b>".concat(td.idOfficier.idEtatCivil.libelle).concat( "</b>"), 145, 40);

doc.rect(10, 60, 150, 40);
 doc.rect(160, 60, 45, 40);

 doc.fromHTML("<b>EXTRAIT DU REGISTRE DES ACTES DE NAISSANCE</b>", 15, 65);
 doc.text("Pour l'année : ", 15, 80);
 const dat= new Date(String(td.idNaissance.datenaiss));
 doc.fromHTML("<b>".concat(String(dat.getFullYear())).concat( "</b>"), 50, 73);
 doc.text("Numéro dans régistre : ", 15, 90);
 doc.fromHTML("<b>".concat(td.idNaissance.idDeclaration.numero).concat( "</b>"), 75, 83);

 doc.text("AN : ", 165, 80);
  doc.fromHTML("<b>".concat(String(dat.getFullYear())).concat( "</b>"), 175, 73);
 doc.text("Numéro : ", 165, 90);
 doc.fromHTML("<b>".concat( td.idNaissance.idDeclaration.numero).concat( "</b>"), 190, 83);

 doc.rect(10, 100, 195, 80);

 doc.text("Date : ", 20, 110);
 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 doc.fromHTML("<b>".concat(dat.toLocaleDateString("fr-FR", options)).concat("</b>"), 40, 103);
 doc.text("Heure : ", 20, 120);
 doc.fromHTML("<b>".concat(String(td.idNaissance.heurenaiss)).concat("</b>"), 40, 113);
 doc.text("Lieu naissance : ", 120, 120);
 //doc.fromHTML("<b>".concat(td.idNaissance.lieunaiss).concat("</b>"), 165, 113);

 doc.text("Un enfant de sexe : ", 20, 130);
 doc.fromHTML("<b>M </b>", 73, 123);
 doc.fromHTML("<b>F </b>", 83, 123);
 // masculin ou feminin
 if(td.idNaissance.genre=== "M"){
  doc.circle(76, 128, 6, "S");
 }else{
  doc.circle(85, 128, 6, "S");
 }

 doc.text("PRENOMS : ", 20, 150);
 doc.fromHTML("<b>".concat(td.idNaissance.prenom).concat("</b>"), 55, 143);
 doc.text("NOM DE FAMILLE : ", 120, 150);
 doc.fromHTML("<b>".concat(td.idNaissance.nomPere).concat("</b>"), 172, 143);
 doc.text("PRENOMS DU PERE : ", 20, 160);
 doc.fromHTML("<b>".concat(td.idNaissance.prenomPere).concat("</b>"), 80, 153);

 doc.text("PRENOMS MERE : ", 20, 170);
 doc.fromHTML("<b>".concat(td.idNaissance.prenomMere).concat("</b>"), 72, 163);
 doc.text("NOM  FAMILLE MERE : ", 120, 170);
 doc.fromHTML("<b>".concat(td.idNaissance.nomMere).concat("</b>"), 182, 163);

 doc.rect(10, 180, 50, 50);

 doc.text("JUGEMENT ", 20, 195);
 doc.text("D'AUTORISATION ", 12, 200);
 doc.text("D'INSCRIPTION ", 15, 205);
 doc.text("(EX SUPPLETIF) ", 15, 210);

 doc.rect(60, 180, 100, 50);
 
 doc.text("Délivré par le juge : ", 63, 190);
 if(td.idNaissance.idJugement!= null){
  doc.fromHTML("<b>".concat(td.idNaissance.idJugement.lieu).concat("</b>"), 113, 183);
 }else{
  doc.fromHTML("<b>NEANT</b>", 113, 183);
 }

 doc.text("Le : ", 63, 200);
 if(td.idNaissance.idJugement!= null){
  doc.fromHTML("<b>".concat(td.idNaissance.idJugement.date.toString()).concat("</b>"), 75, 193);
 }else{
  doc.fromHTML("<b>NEANT</b>", 75, 193);
 }
 
 doc.text("Sous le numéro : ", 63, 210);
 if(td.idNaissance.idJugement!= null){
  doc.fromHTML("<b>".concat(td.idNaissance.idJugement.numero).concat("</b>"), 105, 203);
 }else{
  doc.fromHTML("<b>NEANT</b>", 105, 203);
 }

 doc.rect(160, 180, 45, 50);

 doc.text("AN : ", 165, 200);
 if(td.idNaissance.idJugement!= null){
 doc.fromHTML("<b>".concat(String(dat.getFullYear())).concat( "</b>"), 175, 193);
}else{
  doc.fromHTML("<b>NEANT</b>", 175, 193);
 }
 doc.text("Numéro : ", 165, 210);
 if(td.idNaissance.idJugement!= null){
 doc.fromHTML("<b>".concat( td.idNaissance.idDeclaration.numero).concat( "</b>"), 190, 203);
}else{
  doc.fromHTML("<b>NEANT</b>", 190, 203);
 }
 
 doc.rect(10, 230, 195, 50);
 
 doc.text("DELIVRE PAR LE CENTRE : ", 20, 240);
 doc.fromHTML("<b>".concat(td.idOfficier.idEtatCivil.idTypeEtatCivil.type).concat("</b>"), 30, 240);

 doc.text("CERTIFIE CONFORME ", 110, 240);

 doc.text("A : ", 100, 250);
 doc.fromHTML("<b>".concat(td.idNaissance.idDeclaration.idOfficier.idEtatCivil.idCommune.idArrondissement.idDepartement.idRegion.libelle).concat("</b>"), 110, 243);
 doc.text("Le : ", 160, 250);
 doc.fromHTML("<b>".concat(td.date.toString()).concat("</b>"), 170, 243);
 doc.text("Officier : ", 100, 260);
 doc.fromHTML("<b>".concat(td.idOfficier.idInternaute.idPersonne.prenom).concat(" ").concat(td.idOfficier.idInternaute.idPersonne.nom).concat("</b>"), 120, 253);

 doc.addPage();
 doc.setLineWidth(0.5);

 doc.rect(10, 10, 190, 75);
 doc.text("MENTIONS MARGINALES", 80, 20);
 if(td.idNaissance.mentionMarginal == null){
  doc.fromHTML("<b>NEANT</b>", 100, 30);
 }else{
  doc.fromHTML("<b>".concat( td.idNaissance.mentionMarginal).concat("</b>"), 100, 30);
 }

 doc.fromHTML("<b>........................................................................"+
 "....................."+
 ".....................................................................</b>", 20, 30);
 doc.fromHTML("<b>................................................................."+
 "..................................................................................."+
 "..............</b>", 20, 40);

  doc.save('input.pdf');

 }

 
populateDemande(td: Demande) {
 this.service.formData = Object.assign({}, td);
}

invalideDemande(form: NgForm){
  
  console.log(form.value.id);
  
  this.service.getDemande(form.value.id).subscribe((data: Demande)=>{
    this.d = data;
  });

  this.d.commentaire = form.value.commmentaire;

  this.service.putDemande(this.d).subscribe((res)=>{
  });

  this.data = new Email();
  this.data.email= "jeanyvesmariendione@yahoo.fr";
  this.data.objet= "Invalidation acte de naissance";
  this.descript = "Nous venons par la presente, vous annoncer que votre demande d'acte de naissance sous le numéro de registre : " + this.d.numero + "  a ete rejete <br> Veuillez trouver ci-apres les motifs: <br> " + this.d.commentaire ;
  this.data.body= "<h3>Bonjour cher "+ this.d.idNaissance.nom + "!</h3><br><h5>" + this.descript + "</h5> <br> Cordialement!";
 this.data.attach= "";
 
 this.service.sendEmail(this.data).subscribe((res)=>{
 });
 this.toastr.successToastr('Envoi notification rejet par email réussi!', ' Demande acte');

}

valideDemande(td: Demande){

  this.downloadPdf(td);

  this.data = new Email();
  this.data.email= "jeanyvesmariendione@yahoo.fr";
  this.data.objet= "Validation acte de naissance";
  this.descript = "Nous venons par la presente, vous annoncer que votre demande d'acte de naissance numero : " + td.numero + " a ete valide <br> Veuillez trouver ci-joint l'acte dument signe. ";
 this.data.body= "<h3>Bonjour cher "+ td.nom + "!</h3><br><h5>" + this.descript + "</h5> <br> Cordialement!";
 this.data.attach= "C:\\Users\\HP\\Downloads\\input.pdf";

 this.service.sendEmail(this.data).subscribe((res)=>{
 });
 this.toastr.successToastr('Envoi acte par email réussi!', ' Demande acte');


}

deleteDemande(td: Demande) {
this.service.deleteDemande(td.id).subscribe((res)=>{
});
var index = this.service.list.findIndex(item => item.id === td.id);
  this.service.list.splice(index, 1);
this.toastr.errorToastr('Supprimer avec succées!', 'Demande acte');
}

}

