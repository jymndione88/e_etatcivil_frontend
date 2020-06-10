import {Declaration} from './declaration.model';
import {Lieu_hospitalier} from './lieu_hospitalier.model';

export class Deces {
    
    id: number;
    nom_medecin: string;
    nom_mort: string;
    prenom_mort: string;
    datenaiss: Date;
    lieunaiss: string;
    date_deces: Date;
    heure_deces: Date;
    motif: string;
    id_declaration: Declaration;
    id_lieu_hospitalier: Lieu_hospitalier;

}