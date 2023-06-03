import { IEtablissement } from "./IEtablissement";
import { ILaboratoire } from "./ILaboratoire";
import { IMembre } from "./IMembre";

export interface IAdmin{
    id: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    role: any;
    membres?: IMembre[];
    laboratoires?: ILaboratoire[];
    etablissements?: IEtablissement[];
}