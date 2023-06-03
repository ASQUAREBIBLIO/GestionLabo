import { IAdmin } from "./IAdmin";
import { ILaboratoire } from "./ILaboratoire";

export interface IMembre{
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    isDirector: boolean;
    role: any;
    laboratoire: ILaboratoire;
    admin: IAdmin;
}