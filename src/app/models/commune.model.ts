import {Arrondissement} from './arrondissement.model';
import {Type_commune} from './type_commune.model';

export class Commune {
    
    id: number;
    code: string;
    libelle: string;
    idArrondissement: Arrondissement;
    idTypeCommune: Type_commune;

}