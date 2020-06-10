import {Internaute} from './internaute.model';
import {Officier} from './officier.model';

export class Declaration {
    
    id: number;
    numero: string;
    date: Date;
    qualiteDeclarant: string;
    idInternaute: Internaute;
    idOfficier: Officier;

}