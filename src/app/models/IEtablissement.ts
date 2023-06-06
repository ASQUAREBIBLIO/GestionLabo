import { IAdmin } from "./IAdmin";
import { ILaboratoire } from "./ILaboratoire";

export interface IEtablissement{
    id?: number;
    nom: string;
    ville: string;
    adresse: string;
    laboratoires?: ILaboratoire[];
    admin?: IAdmin;
}