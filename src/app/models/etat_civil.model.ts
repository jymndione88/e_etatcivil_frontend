import {Type_etatcivil} from './type_etatcivil.model';
import {Commune} from './commune.model';

export class Etat_civil {
    
    id: number;
    code: string;
    libelle: string;
    idTypeEtatCivil: Type_etatcivil;
    idCommune: Commune;

}