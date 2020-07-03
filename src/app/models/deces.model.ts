import {Declaration} from './declaration.model';
import {Lieu_hospitalier} from './lieu_hospitalier.model';

export class Deces {
    
    id: number;
    nomMedecin: string;
    nomMort: string;
    prenomMort: string;
    datenaiss: Date;
    lieunaiss: string;
    dateDeces: Date;
    heureDeces: Date;
    motif: string;
    idDeclaration: Declaration;
    idLieuHospitalier: Lieu_hospitalier;

}