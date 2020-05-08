import { Type_declarationService } from './../../../services/type_declaration.service';
import { Commune } from './../../../models/commune.model';
import { CommuneService } from './../../../services/commune.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demarche',
  templateUrl: './demarche.component.html',
  styleUrls: ['./demarche.component.css']
})
export class DemarcheComponent implements OnInit {

  paye: boolean;
  motif: string;
  constructor(private service: CommuneService, private ser_typ_decla: Type_declarationService) { 
    
  }

  ngOnInit() {
    this.service.loadListeCommune();
    this.ser_typ_decla.loadListeType_declaration();

    this.paye= false;
    
  }

  onSubmit() {
  console.log("salut");
  console.log(this.motif);
}

payer() {
  this.paye= true;
console.log("paye");
console.log(this.paye);
}

}
