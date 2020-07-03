import {Demande} from './demande.model';
import {Declaration} from './declaration.model';

export class Facture {
    
    id: number;
    date: Date;
    montant: number;
    remise: number;
    tva: number;
    etat: boolean;
    idDemande: Demande;
    idDeclaration: Declaration;

}