import {Officier} from './officier.model';
import {Etat_civil} from './etat_civil.model';

export class Mariage {
    
    id: number;
    date: Date;
    numero: string;
    type: string;
    regime: string;
    contrat: string;

    nom_conjoint: string;
    prenom_conjoint: string;
    nom_conjointe: string;
    prenom_conjointe: string;
    datenaiss_conjoint: string;
    lieunaiss_conjoint: string;
    profession_conjoint: string;
    datenaiss_conjointe: string;
    lieunaiss_conjointe: string;
    profession_conjointe: string;
    nom_pere_conjoint: string;
    nom_mere_conjoint: string;
    adress_parent_conjoint: string;
    nom_pere_conjointe: string;
    nom_mere_conjointe: string;
    adress_parent_conjointe: string;

    id_officier: number;
    id_etat_ivil: Etat_civil;

}