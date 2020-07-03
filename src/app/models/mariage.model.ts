import {Officier} from './officier.model';
import {Etat_civil} from './etat_civil.model';

export class Mariage {
    
    id: number;
    date: Date;
    numero: string;
    type: string;
    regime: string;
    contrat: string;

    nomConjoint: string;
    prenomConjoint: string;
    nomConjointe: string;
    prenomConjointe: string;
    datenaissConjoint: string;
    lieunaissConjoint: string;
    professionConjoint: string;
    datenaissConjointe: string;
    lieunaissConjointe: string;
    professionConjointe: string;
    nomPereConjoint: string;
    nomMereConjoint: string;
    adressParentConjoint: string;
    nomPereConjointe: string;
    nomMereConjointe: string;
    adressParentConjointe: string;

    idOfficier: number;
    idEtatCivil: Etat_civil;

}