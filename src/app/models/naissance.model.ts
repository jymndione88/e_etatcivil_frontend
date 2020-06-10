import {Jugement} from './jugement.model';
import {Declaration} from './declaration.model';

export class Naissance {
    
    id: number;
    genre: string;
    nom: string;
    prenom: string;
    datenais: Date;
    lieunaiss: string;
    heurenaiss: Date;
    nom_pere: string;
    prenom_pere: string;
    nom_mere: string;
    prenom_mere: string;
    mention_marginal: string;

    idJugement: Jugement;
    idDeclaration: Declaration;

}