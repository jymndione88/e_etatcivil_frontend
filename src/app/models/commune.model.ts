import {Departement} from './departement.model';

export class Commune {
    
    id: number;
    code: string;
    libelle: string;
    idDepartement: Departement;

}