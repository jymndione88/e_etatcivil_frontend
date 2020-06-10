import {Personne} from './personne.model';

export class Internaute {
    
    id: number;
    login: string;
    email: string;
    password: string;
    resetPassword: string;
    idPersonne: Personne;

}