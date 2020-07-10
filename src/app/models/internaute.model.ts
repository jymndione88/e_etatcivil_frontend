import {Personne} from './personne.model';
import {Role} from './role.model';

export class Internaute {
    
    id: number;
    login: string;
    email: string;
    password: string;
    resetPassword: string;
    active: boolean;
    idPersonne: Personne;
    roles: Role[];

}