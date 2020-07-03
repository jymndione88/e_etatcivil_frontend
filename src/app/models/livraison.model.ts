import {Demande} from './demande.model';
import {Declaration} from './declaration.model';
import {Mode_livraison} from './mode_livraison.model';

export class Livraison {
    
    id: number;
    date: Date;
    adresse: string;
    boiteEmail: string;
    boitePostal: string;
    pays: string;
    description: string;
    idDemande: Demande;
    idDeclaration: Declaration;
    idModeLivraison: Mode_livraison;

}