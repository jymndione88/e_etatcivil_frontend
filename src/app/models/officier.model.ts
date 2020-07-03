import {Internaute} from './internaute.model';
import {Etat_civil} from './etat_civil.model';
import {Role_officer} from './role_officier.model';

export class Officier {
    
    id: number;
    idInternaute: Internaute;
    idEtatCivil: Etat_civil;
    idRoleOfficier: Role_officer;

}