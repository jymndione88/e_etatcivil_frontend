import { Component, OnInit } from '@angular/core';

import { NaissanceService } from './../../../services/naissance.service';
import { DeclarationService } from './../../../services/declaration.service';
import { LivraisonService } from './../../../services/livraison.service';
import { PaiementService } from './../../../services/paiement.service'
import { DemandeService } from './../../../services/demande.service';
import { CommuneService } from './../../../services/commune.service';
import { Mode_paiementService } from './../../../services/mode_paiement.service';
import { Mode_livraisonService } from './../../../services/mode_livraison.service';
import { Lieu_hospitalierService } from './../../../services/lieu_hospitalier.service';
import { DecesService } from './../../../services/deces.service';
import { FactureService } from './../../../services/facture.service';
import { InternauteService } from './../../../services/internaute.service';
import { TokenStorageService } from './../../../services/token-storage.service';
import { JugementService } from './../../../services/jugment.service';
import { MariageService } from './../../../services/mariage.service';
import { Naissance } from 'src/app/models/naissance.model';
import { Mariage } from 'src/app/models/mariage.model';
import { Deces } from 'src/app/models/deces.model';
import { Internaute } from 'src/app/models/internaute.model';
import { Demande } from 'src/app/models/demande.model';
import { Declaration } from 'src/app/models/declaration.model';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  nbdecNaissance: number;
  nbdemNaissance: number;
  nbdecMariage: number;
  nbdemMariage: number;
  nbdecDeces: number;
  nbdemDeces: number;
  nbCompte: number= 0;

  nbNaissance: number= 0;
  nbMariage: number= 0;
  nbDeces: number= 0;

  pourcenNaissance: number= 0;
  pourcenMariage: number= 0;
  pourcenDeces: number= 0;
  pourcenDemande: number= 0;

  totalNaissance: number= 0;
  totalMariage: number= 0;
  totalDeces: number= 0;
  total: number= 0;

  constructor(private serv_commune: CommuneService, private serv_demande: DemandeService
    ,private serv_naissance: NaissanceService ,private serv_declaration: DeclarationService
    ,private serv_livraison: LivraisonService ,private serv_paiement: PaiementService
    ,private serv_modelivraison: Mode_livraisonService ,private serv_modepaiement: Mode_paiementService
    ,private serv_lieuhospitalier: Lieu_hospitalierService, private serv_deces: DecesService
    , private serv_facture: FactureService, private serv_internaute: InternauteService
    ,private tokenStorage: TokenStorageService
    , private serv_jugement: JugementService, private serv_mariage: MariageService) {
   }

  ngOnInit() {

    this.serv_demande.loadListeDemande().subscribe((data: Demande[]) => {
      this.pourcenDemande = data.length;

      this.serv_demande.loadListeDemandeParNature("naissance").subscribe((data1: Demande[]) => {
        this.pourcenNaissance = data1.length;

        this.serv_demande.loadListeDemandeParNature("mariage").subscribe((data2: Demande[]) => {
          this.pourcenMariage = data2.length;

          this.serv_demande.loadListeDemandeParNature("deces").subscribe((data3: Demande[]) => {
            this.pourcenDeces= data3.length;
          });
        });
      });
    });    
   

    this.serv_naissance.loadListeNaissance().subscribe((data: Naissance[]) => {
      this.nbdecNaissance = data.length;

      this.serv_mariage.loadListeMariage().subscribe((data1: Mariage[]) => {
        //console.log( data.length);
        this.nbdecMariage = data1.length;

        this.serv_deces.loadDeces().subscribe((data2: Deces[]) => {
          //console.log( data.length);
          this.nbdecDeces = data2.length;

          this.serv_internaute.loadNBCompte(2).subscribe((data3: number) => {
            // console.log(data);
             this.nbCompte = data3;

             this.serv_demande.loadNbDemandeParType("naissance").subscribe((data4: number) => {
              this.nbdemNaissance = data4;

              this.serv_demande.loadNbDemandeParType("mariage").subscribe((data5: number) => {
                // console.log(data);
                 this.nbdemMariage = data5;

                 this.serv_demande.loadNbDemandeParType("deces").subscribe((data6: number) => {
                  //console.log(data);
                  this.nbdemDeces = data6;

                  this.nbNaissance= this.nbdecNaissance + this.nbdemNaissance;
                  this.nbMariage= this.nbdecMariage + this.nbdemMariage;
                  this.nbdecDeces= this.nbdecDeces + this.nbdemDeces;
                  
                  this.totalNaissance= (this.nbdecNaissance * 2500) + (this.nbdemNaissance * 500);
                  this.totalMariage= (this.nbdecMariage * 2500) + (this.nbdemMariage * 500);
                  this.totalDeces= (this.nbdecDeces * 2500) + (this.nbdemDeces * 500);
                  this.total= this.totalNaissance + this.totalMariage + this.totalDeces;

                 });
                });
             });
            });
         });
       });
     });

  }

}
