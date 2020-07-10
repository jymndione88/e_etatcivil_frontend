import {Jugement} from './jugement.model';
import {Declaration} from './declaration.model';
import {Lieu_hospitalier} from './lieu_hospitalier.model';

export class Naissance {
    
    id: number;
    genre: string;
    nom: string;
    prenom: string;
    datenaiss: Date;
    heurenaiss: Date;
    nomPere: string;
    prenomPere: string;
    nomMere: string;
    prenomMere: string;
    mentionMarginal: string;
    idJugement: Jugement;
    idDeclaration: Declaration;
    idLieuHospitalier: Lieu_hospitalier;

}