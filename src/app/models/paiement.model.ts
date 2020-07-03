import {Mode_paiement} from './mode_paiement.model';
import {Facture} from './facture.model';

export class Paiement {
    
    id: number;
    date: Date;
    montant: number;
    idModePaiement: Mode_paiement;
    idFacture: Facture;

}