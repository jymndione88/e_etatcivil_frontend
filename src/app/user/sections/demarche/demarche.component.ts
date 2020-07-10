import { CommuneService } from './../../../services/commune.service';
import { Demande } from './../../../models/demande.model';
import { Declaration } from './../../../models/declaration.model';
import { Livraison } from './../../../models/livraison.model';
import { Paiement } from './../../../models/paiement.model';
import { Commune } from './../../../models/commune.model';
import { Naissance } from './../../../models/naissance.model';
import { DemandeService } from './../../../services/demande.service';
import { NaissanceService } from './../../../services/naissance.service';
import { DeclarationService } from './../../../services/declaration.service';
import { LivraisonService } from './../../../services/livraison.service';
import { PaiementService } from './../../../services/paiement.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

import { Mode_paiement } from './../../../models/mode_paiement.model';
import { Mode_paiementService } from './../../../services/mode_paiement.service';
import { Mode_livraison } from './../../../models/mode_livraison.model';
import { Mode_livraisonService } from './../../../services/mode_livraison.service';
import { Lieu_hospitalierService } from './../../../services/lieu_hospitalier.service';
import { DecesService } from './../../../services/deces.service';
import { Deces } from './../../../models/deces.model';
import { FactureService } from './../../../services/facture.service';
import { Facture } from './../../../models/facture.model';
import { Lieu_hospitalier } from 'src/app/models/lieu_hospitalier.model';
import { Officier } from './../../../models/officier.model';
import { Internaute } from './../../../models/internaute.model';
import { InternauteService } from './../../../services/internaute.service';
import { TokenStorageService } from './../../../services/token-storage.service';
import { Mariage } from './../../../models/mariage.model';
import { Jugement } from './../../../models/jugement.model';
import { JugementService } from './../../../services/jugment.service';
import { MariageService } from './../../../services/mariage.service';

@Component({
  selector: 'app-demarche',
  templateUrl: './demarche.component.html',
  styleUrls: ['./demarche.component.css']
})
export class DemarcheComponent implements OnInit {

  isLoggedIn = false;
  private roles: string[];
  showDeclaration = false;
  log: number;
  molivraison: string;
  mopaiement: string;
  jugement: Jugement;

  officier: Officier;
  internaute: Internaute;
  listCommune: Commune;
  listHospitalier: Lieu_hospitalier;
  facture: Facture;
  deces: Deces;
  modeLivraison: Mode_livraison;
  modePaiement: Mode_paiement;
  livraison: Livraison;
  paiement: Paiement;
  commune: Commune;
  demande: Demande;
  declaration: Declaration;
  naissance: Naissance;
  mariage: Mariage;
  paye: boolean;
  motif: string;

  isCourrier: boolean = false;
  isMail: boolean= false;
 isPaydunya: boolean= false;
 isOrange: boolean= false;

  constructor(private serv_commune: CommuneService, private serv_demande: DemandeService
    ,private serv_naissance: NaissanceService ,private serv_declaration: DeclarationService
    ,private serv_livraison: LivraisonService ,private serv_paiement: PaiementService
    ,private serv_modelivraison: Mode_livraisonService ,private serv_modepaiement: Mode_paiementService
    ,private serv_lieuhospitalier: Lieu_hospitalierService, private serv_deces: DecesService
    , private serv_facture: FactureService, private serv_internaute: InternauteService
    , private toastr: ToastrManager, private tokenStorage: TokenStorageService
    , private serv_jugement: JugementService, private serv_mariage: MariageService) { 
    
  }

  ngOnInit() {

    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      var i;
      for (i = 0; i < user.roles.length; i++) {
        if(user.roles.toString() == "ROLE_USER") {
          this.showDeclaration= true;
        }
      }

      this.log = user.id;
    
    }

    this.serv_commune.loadListeCommune().subscribe((data:any) => {
      this.listCommune = data;
     });
   
    this.serv_lieuhospitalier.loadListeLieu_hospitalier().subscribe((data:any) => {
      this.listHospitalier = data;
     });
   
  
    this.paye= false;
  }

    
 // @ViewChild('close') private close: ElementRef;
 // public hideModel() {
   //   this.close.nativeElement.click();      
 // }

  @ViewChild('close4') private close4: ElementRef;
  public hideModel4() {
      this.close4.nativeElement.click();      
  }

  @ViewChild('close3') private close3: ElementRef;
  public hideModel3() {
      this.close3.nativeElement.click();      
  }

  @ViewChild('close2') private close2: ElementRef;
  public hideModel2() {
      this.close2.nativeElement.click();      
  }

  @ViewChild('close1') private close1: ElementRef;
  public hideModel1() {
      this.close1.nativeElement.click();      
  }

  @ViewChild('closeA') private closeA: ElementRef;
  public hideModelA() {
      this.closeA.nativeElement.click();      
  }
 
  onSubmit(form: NgForm, type: string) {
  //console.log("submit");
  //console.log(form.value);

  if (type === "decdeces"){
   
    //if (this.paye){

      this.declaration= new Declaration();
   
      this.declaration.numero= new Date().getDay().toString().concat(new Date().getMonth().toString(), new Date().getFullYear().toString(), new Date().getHours().toString(), new Date().getMinutes().toString(), new Date().getSeconds().toString(), new Date().getMilliseconds().toString()) ;
      this.declaration.date= new Date();
    this.declaration.qualiteDeclarant= form.value.qualitedeces4;

    this.serv_internaute.getInternaute(this.log).subscribe((data: Internaute)=>{
      this.declaration.idInternaute= data;
      this.declaration.idOfficier= null;

     this.serv_declaration.postDeclaration(this.declaration).subscribe((data1: Declaration)=>{

      this.deces= new Deces();

      this.deces.nomMedecin= form.value.nommedecin4;
       this.deces.nomMort= form.value.nomdeces4;
       this.deces.prenomMort= form.value.prenomdeces4;
       this.deces.datenaiss= form.value.datenaissdeces4;
       this.deces.lieunaiss= form.value.lieunaissdeces4;
       this.deces.dateDeces= form.value.datedeces4;

       var dat= new Date("2020-10-10T" + form.value.heuredeces4 + ":00.00");
       this.deces.heureDeces= dat;
       this.deces.motif= form.value.motifdeces4;
   
       this.serv_lieuhospitalier.getLieu_hospitalierLibell(1,form.value.lieudeces4).subscribe((data2: Lieu_hospitalier)=>{
         this.deces.idLieuHospitalier= data2;
         
         this.deces.idDeclaration= data1;

         this.serv_deces.postDeces(this.deces).subscribe((data3: Deces)=>{

              this.livraison= new Livraison();

              // enregistrement livraison
              if(form.value.reception4 === 'courrier'){
                console.log("courrier");
                this.livraison.adresse= form.value.adresse4;
                this.livraison.boitePostal= form.value.postal4;
                this.livraison.pays= form.value.pays4;
                this.molivraison= "Poste";
              }else if(form.value.reception4 === 'email'){
                console.log("email");
                this.livraison.boiteEmail= form.value.emailReception4;
                this.molivraison= "Email";
              }else{
                this.molivraison= "Physique";
              }

              this.serv_modelivraison.getMode_livrisonBytype(1, this.molivraison).subscribe((data4: Mode_livraison)=>{
              
                this.livraison.idModeLivraison= data4;
                this.livraison.idDeclaration= data1;
                this.serv_livraison.postLivraison(this.livraison).subscribe((data5: Livraison)=>{
                
                  this.resetForm(form);
                  this.toastr.successToastr('Votre déclaration de décès est enregistrée avec succées!', 'Declaration acte civil!');
                  this.hideModel4();
                });
  
              });

    });

       });

    });
    });
    
    //}else{     
  //this.toastr.warningToastr('Veuillez effectuer le paiment!', 'Declaration acte civil!');
    //}
    
  }else
  if (type === "decnaissance"){
    console.log("dec naissance");

   // if (this.paye){

      this.declaration= new Declaration();
   
    this.declaration.numero= new Date().getDay().toString().concat(new Date().getMonth().toString(), new Date().getFullYear().toString(), new Date().getHours().toString(), new Date().getMinutes().toString(), new Date().getSeconds().toString(), new Date().getMilliseconds().toString()) ;
    this.declaration.date= new Date();
    this.declaration.qualiteDeclarant= form.value.qualite1;

    this.serv_internaute.getInternaute(this.log).subscribe((data: Internaute)=>{
      this.declaration.idInternaute= data;
      this.declaration.idOfficier= null;

     this.serv_declaration.postDeclaration(this.declaration).subscribe((data1: Declaration)=>{

      this.naissance= new Naissance();

      this.naissance.genre= form.value.genre1;
       this.naissance.nom= form.value.nom1;
       this.naissance.prenom= form.value.prenom1;
       this.naissance.datenaiss= form.value.datenaiss1;
       
       var dat= new Date("2020-10-10T" + form.value.heurenaiss1 + ":00.00");
       this.naissance.heurenaiss= dat;

       this.naissance.nomPere= form.value.nom_pere1;
       this.naissance.prenomPere= form.value.prenom_pere1;
       this.naissance.nomMere= form.value.nom_mere1;
       this.naissance.prenomMere= form.value.prenom_mere1;
       this.naissance.mentionMarginal= form.value.mention1;

       this.naissance.idDeclaration= data1;
       
       this.serv_lieuhospitalier.getLieu_hospitalierLibell(1,form.value.lieunaiss1).subscribe((data2: Lieu_hospitalier)=>{
        
       this.naissance.idLieuHospitalier= data2;
        
         if(form.value.tribunal1 !== undefined){
          
            this.jugement= new Jugement();
            this.jugement.numero= form.value.numjugement1;

            var dat= new Date(form.value.anneejugement1 + "-10-10T00:00:00.00");
            this.jugement.annee= dat;
            this.jugement.date= form.value.datejugement1;
            this.jugement.lieu= form.value.tribunal1;
            this.jugement.piece_jointe= form.value.piece1;

            this.serv_jugement.postJugement(this.jugement).subscribe((data3: Jugement)=>{
              this.naissance.idJugement= data3;

              this.serv_naissance.postNaissance(this.naissance).subscribe((data4: Naissance)=>{
                this.livraison= new Livraison();

                // enregistrement livraison
                if(form.value.reception1 === 'courrier'){
                  console.log("courrier");
                  this.livraison.adresse= form.value.adresse1;
                  this.livraison.boitePostal= form.value.postal1;
                  this.livraison.pays= form.value.pays1;
                  this.molivraison= "Poste";
                }else if(form.value.reception1 === 'email'){
                  console.log("email");
                  this.livraison.boiteEmail= form.value.emailReception1;
                  this.molivraison= "Email";
                }else{
                  this.molivraison= "Physique";
                }
  
                this.serv_modelivraison.getMode_livrisonBytype(1, this.molivraison).subscribe((data5: Mode_livraison)=>{
                
                  this.livraison.idModeLivraison= data5;
                  this.livraison.idDeclaration= data1;
                  this.serv_livraison.postLivraison(this.livraison).subscribe((data6: Livraison)=>{
                  
                    this.resetForm(form);
                    this.toastr.successToastr('Votre déclaration de naissance est enregistrée avec succées!', 'Declaration acte civil!');
                    this.hideModel1();
                  });
    
                });
              });

            });
            
         }else{
            
          this.serv_naissance.postNaissance(this.naissance).subscribe((data4: Naissance)=>{
            this.livraison= new Livraison();

            // enregistrement livraison
            if(form.value.reception1 === 'courrier'){
              console.log("courrier");
              this.livraison.adresse= form.value.adresse1;
              this.livraison.boitePostal= form.value.postal1;
              this.livraison.pays= form.value.pays1;
              this.molivraison= "Poste";
            }else if(form.value.reception1 === 'email'){
              console.log("email");
              this.livraison.boiteEmail= form.value.emailReception1;
              this.molivraison= "Email";
            }else{
              this.molivraison= "Physique";
            }

            this.serv_modelivraison.getMode_livrisonBytype(1, this.molivraison).subscribe((data5: Mode_livraison)=>{
            
              this.livraison.idModeLivraison= data5;
              this.livraison.idDeclaration= data1;
              this.serv_livraison.postLivraison(this.livraison).subscribe((data6: Livraison)=>{
              
                this.resetForm(form);
                this.toastr.successToastr('Votre déclaration de naissance est enregistrée avec succées!', 'Declaration acte civil!');
                this.hideModel1();
              });

            });
          });
         }

       });

    });
    });
    
  //  }else{    
  //this.toastr.warningToastr('Veuillez effectuer le paiment!', 'Declaration acte civil!');
  //  }
    
  }else
  if (type === "demnaissance"){
    console.log("dem naissance");
    
   // if (this.paye){

      this.demande= new Demande();
   
      this.demande.numero= new Date().getDay().toString().concat(new Date().getMonth().toString(), new Date().getFullYear().toString(), new Date().getHours().toString(), new Date().getMinutes().toString(), new Date().getSeconds().toString(), new Date().getMilliseconds().toString()) ;
      this.demande.date= new Date();
    this.demande.motif= form.value.motif;
    this.demande.qualiteDemandeur= form.value.qualite;
    this.demande.natureActe= form.value.nature;
    this.demande.nbreExemplaire= form.value.nombre;

    this.demande.civilite= form.value.civilite;
    this.demande.nom= form.value.nom;
    this.demande.prenom= form.value.prenom;
    this.demande.numRegistre= form.value.numero;
    this.demande.datenaiss= form.value.datenaiss;
    this.demande.pays= form.value.paysA;
    this.demande.nationalite= form.value.nationalite;

    this.demande.idOfficier= null;
    
    this.serv_declaration.getDeclarationBynum(1, form.value.numero).subscribe((data: Declaration)=>{
      
      if(data != null){
      this.serv_naissance.getNaissanceByDeclaration(1, data.id).subscribe((data9: Naissance)=>{

        console.log(data9);
        var dat= new Date("2020-10-10T" + data9.heurenaiss + ".00");
        data9.heurenaiss= dat;
        this.demande.idNaissance= data9;
        this.serv_demande.postDemande(this.demande).subscribe((data1: Demande)=>{
          console.log(data1);

          this.livraison= new Livraison();
          // enregistrement livraison
          if(form.value.reception === 'courrier'){
            console.log("courrier");
            this.livraison.adresse= form.value.adresse;
            this.livraison.boitePostal= form.value.postal;
            this.livraison.pays= form.value.pays;
            this.molivraison= "Poste";
          }else if(form.value.reception === 'email'){
            console.log("email");
            this.livraison.boiteEmail= form.value.emailReception;
            this.molivraison= "Email";
          }else{
            this.molivraison= "Physique";
          }

          this.serv_modelivraison.getMode_livrisonBytype(1, this.molivraison).subscribe((data5: Mode_livraison)=>{
          
            console.log(data5);
           
            this.livraison.idModeLivraison= data5;
            this.livraison.idDemande= data1;
            this.serv_livraison.postLivraison(this.livraison).subscribe((data6: Livraison)=>{
            
              this.resetForm(form);
              this.toastr.successToastr('Votre demande acte de naissance est enregistrée avec succées!', 'Demande acte civil!');
              this.hideModelA();
            });

          });

       });
    });
  }else{
    this.toastr.warningToastr('Le numéro de régistre est incorrect!', 'Demande acte civil!');
  }

    });
    
  //  }else{    
  //this.toastr.warningToastr('Veuillez effectuer le paiment!', 'Declaration acte civil!');
  //  }
    
  }else
  if (type === "demmariage"){
    console.log("dem mariage");
    
   // if (this.paye){

      this.demande= new Demande();
   
      this.demande.numero= new Date().getDay().toString().concat(new Date().getMonth().toString(), new Date().getFullYear().toString(), new Date().getHours().toString(), new Date().getMinutes().toString(), new Date().getSeconds().toString(), new Date().getMilliseconds().toString()) ;
      this.demande.date= new Date();
    this.demande.motif= form.value.motif2;
    this.demande.qualiteDemandeur= form.value.qualite2;
    this.demande.natureActe= form.value.nature2;
    this.demande.nbreExemplaire= form.value.nombre2;

    this.demande.civilite= form.value.civilite2;
    this.demande.nom= form.value.nom2;
    this.demande.prenom= form.value.prenom2;
    this.demande.numRegistre= form.value.numero2;
    this.demande.datenaiss= form.value.datenaiss2;
    this.demande.pays= form.value.paysB;
    this.demande.nationalite= form.value.nationalite2;

    this.demande.idOfficier= null;

    this.serv_mariage.getMariageByDeclaration(1, form.value.numero2).subscribe((data: Mariage)=>{
      
      console.log(data);
      if(data != null){
     
        this.demande.idMariage= data;
        this.serv_demande.postDemande(this.demande).subscribe((data1: Demande)=>{
          console.log(data1);
          this.livraison= new Livraison();

          // enregistrement livraison
          if(form.value.reception === 'courrier'){
            console.log("courrier");
            this.livraison.adresse= form.value.adresse;
            this.livraison.boitePostal= form.value.postal;
            this.livraison.pays= form.value.pays;
            this.molivraison= "Poste";
          }else if(form.value.reception === 'email'){
            console.log("email");
            this.livraison.boiteEmail= form.value.emailReception;
            this.molivraison= "Email";
          }else{
            this.molivraison= "Physique";
          }

          this.serv_modelivraison.getMode_livrisonBytype(1, this.molivraison).subscribe((data5: Mode_livraison)=>{
          
            this.livraison.idModeLivraison= data5;
            this.livraison.idDemande= data1;
            this.serv_livraison.postLivraison(this.livraison).subscribe((data6: Livraison)=>{
            
              this.resetForm(form);
              this.toastr.successToastr('Votre demande acte de mariage est enregistrée avec succées!', 'Demande acte civil!');
              this.hideModel2();
            });

          });
    });
  }else{
    this.toastr.warningToastr('Le numéro de régistre est incorrect!', 'Demande acte civil!');
  }

    });
    
  //  }else{    
  //this.toastr.warningToastr('Veuillez effectuer le paiment!', 'Declaration acte civil!');
  //  }
    
  }else
  if (type === "demdeces"){
    console.log("dem deces");
    
   // if (this.paye){

      this.demande= new Demande();
   
      this.demande.numero= new Date().getDay().toString().concat(new Date().getMonth().toString(), new Date().getFullYear().toString(), new Date().getHours().toString(), new Date().getMinutes().toString(), new Date().getSeconds().toString(), new Date().getMilliseconds().toString()) ;
      this.demande.date= new Date();
    this.demande.motif= form.value.motif3;
    this.demande.qualiteDemandeur= form.value.qualite3;
    this.demande.natureActe= form.value.nature3;
    this.demande.nbreExemplaire= form.value.nombre3;

    this.demande.civilite= form.value.civilite3;
    this.demande.nom= form.value.nom3;
    this.demande.prenom= form.value.prenom3;
    this.demande.numRegistre= form.value.numero3;
    this.demande.datenaiss= form.value.datenaiss3;
    this.demande.pays= form.value.paysC;
    this.demande.nationalite= form.value.nationalite3;

    this.demande.idOfficier= null;

    this.serv_declaration.getDeclarationBynum(1, form.value.numero3).subscribe((data: Declaration)=>{
      
      console.log(data);
      if(data != null){
      this.serv_deces.getDecesByDeclaration(1, data.id).subscribe((data9: Deces)=>{

        console.log(data9);
        var dat= new Date("2020-10-10T" + data9.heureDeces + ".00");
        data9.heureDeces= dat;
        this.demande.idDeces= data9;
        this.serv_demande.postDemande(this.demande).subscribe((data1: Demande)=>{
          console.log(data1);

          this.livraison= new Livraison();

          // enregistrement livraison
          if(form.value.reception === 'courrier'){
            console.log("courrier");
            this.livraison.adresse= form.value.adresse;
            this.livraison.boitePostal= form.value.postal;
            this.livraison.pays= form.value.pays;
            this.molivraison= "Poste";
          }else if(form.value.reception === 'email'){
            console.log("email");
            this.livraison.boiteEmail= form.value.emailReception;
            this.molivraison= "Email";
          }else{
            this.molivraison= "Physique";
          }

          this.serv_modelivraison.getMode_livrisonBytype(1, this.molivraison).subscribe((data5: Mode_livraison)=>{
          
            this.livraison.idModeLivraison= data5;
            this.livraison.idDemande= data1;
            this.serv_livraison.postLivraison(this.livraison).subscribe((data6: Livraison)=>{
            
              this.resetForm(form);
              this.toastr.successToastr('Votre demande acte de décès est enregistrée avec succées!', 'Demande acte civil!');
              this.hideModel3();
            });

          });

       });
    });
  }else{
    this.toastr.warningToastr('Le numéro de régistre est incorrect!', 'Demande acte civil!');
  }

    });
    
  //  }else{    
  //this.toastr.warningToastr('Veuillez effectuer le paiment!', 'Declaration acte civil!');
  //  }
    
  }

}

resetForm(form?: NgForm) {
  if (form != null) form.resetForm();
}

payer(form: NgForm, type: string) {

  this.paye= true;
 console.log("paye");

 // enregistrement paiement
 this.facture= new Facture();
 this.facture.date= new Date();

  if (type === "decdeces"){
 console.log(form.value.montantPaiement4);
  this.facture.montant= parseFloat("1500");
  //this.facture.remise= parseFloat("1500");
  //this.facture.tva= parseFloat("1500");
   this.facture.idDeclaration= this.declaration;
 
   this.serv_facture.postFacture(this.facture).subscribe((res)=>{
   });

   this.paiement.date= new Date();
   this.paiement.montant= parseFloat("1500");
   this.paiement.idFacture= this.facture;
   //this.paiement.idModePaiement= new Date();
 
   this.serv_paiement.postPaiement(this.paiement).subscribe((res)=>{
   });
 
   
  }

 /** var paydunya = require('paydunya');

var setup = new paydunya.Setup({
  masterKey: 'zNugS7Hq-e4oN-RBPX-Q4IO-l7pClSSbdstD',
  privateKey: 'test_private_xvRCqJ0Foie3Zzfih2SHErM47sJ',
  publicKey: 'test_public_RxAOvWGfnptyUcw9vqsoHe5rPrc',
  token: 'g9VIuahZoul7ZpPRzJNN',
  mode: 'test' // Optionnel. Utilisez cette option pour les paiements tests.
});

// Configuration des informations de votre service/entreprise
var store = new paydunya.Store({
  name: 'E-administration', // Seul le nom est requis
  tagline: "Etat civil",
  phoneNumber: '336530583',
  postalAddress: 'Dakar Plateau',
  websiteURL: 'http://localhost:4200/',
  //logoURL: 'http://localhost:4200/logo1.png',
  //callbackURL: 'http://localhost:4200/fichier_de_reception_des_données_de_facturation',

});

var invoice = new paydunya.CheckoutInvoice(setup, store);
invoice.addItem('Chaussures Croco', 1, 10000, 30000, 'Chaussures faites en peau de crocrodile authentique qui chasse la pauvreté');
invoice.addItem('Chemise Glacée', 1, 5000, 5000);
invoice.totalAmount = 42300;

invoice.create()
  .then(function (){
    console.log(invoice.status);
    console.log(invoice.token); // Token de facture
    console.log(invoice.responseText);
    console.log(invoice.url); // URL de redirection de paiement de facture PayDunya
  })
  .catch(function (e) {
    console.log(e);
  });


  var directPay = new paydunya.DirectPay(setup);
directPay.creditAccount('761823314', 1000)
  .then(function (){
    console.log(directPay.description);
    console.log(directPay.responseText);
    console.log(directPay.transactionID);
  })
  .catch(function (e) {
    console.log(e);
  }); */ 

 //  var token = 'g9VIuahZoul7ZpPRzJNN';

//var invoice = new paydunya.CheckoutInvoice(setup, store);
//invoice.confirm(token)
//.then(function (){
  // Récupérer le statut du paiement
  // Le statut du paiement peut être soit completed, pending, cancelled
  //console.log(invoice.status);
  //console.log(invoice.responseText);  // Réponse du serveur
  // Les champs qui suivent seront disponibles si et
  // seulement si le statut du paiement est égal à "completed".
  // Vous pouvez récupérer le nom, l'adresse email et le
  // numéro de téléphone du client en utilisant l'objet suivant
  //console.log(invoice.customer); // {name: 'Alioune', phone: '773830274', email: 'aliounebadara@gmail.com'}
  // URL du reçu PDF électronique pour téléchargement
  //console.log(invoice.receiptURL); // 'https://app.paydunya.com/sandbox-checkout/receipt/pdf/test_VPGPZNnHOC.pdf'
//})
 //.catch(function (e) {
  //console.log(e);
//});  

}

courrier() {
this.isCourrier= true;
this.isMail= false;
}

email() {
  this.isMail= true;
  this.isCourrier= false;
}
presence() {
  this.isCourrier= false;
  this.isMail= false;
}

paydunya(){
  this.isPaydunya= true;
  this.isOrange= false;
}
orange(){
  this.isPaydunya= false;
  this.isOrange= true;
}
carte(){
  this.isPaydunya= true;
  this.isOrange= true;
}

}
