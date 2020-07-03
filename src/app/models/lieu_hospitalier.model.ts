import {Etat_civil} from './etat_civil.model';

export class Lieu_hospitalier {
    
    id: number;
    code: string;
    libelle: string;
    idEtatCivil: Etat_civil;

}