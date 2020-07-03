import {Commune} from './commune.model';
import {Naissance} from './naissance.model';
import {Mariage} from './mariage.model';
import {Deces} from './deces.model';
import {Officier} from './officier.model';

export class Demande {
    
    id: number;
    numero: string;
    date: Date;
    motif: string;
    qualiteDemandeur: string;
    natureActe: string;
    nbreExemplaire: BigInteger;
    civilite: string;
    nom: string;
    prenom: string;
    datenaiss: Date;
    numRegistre: number;
    pays: string;
    nationalite: string;
    etat: string;
    commentaire: string;

    idOfficier: Officier;
    idNaissance: Naissance;
    idMariage: Mariage;
    idDeces: Deces;

}