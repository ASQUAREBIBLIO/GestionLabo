import { IAdmin } from "./IAdmin";
import { IExpressionBesoin } from "./IExpressionBesoin";
import { ILaboratoire } from "./ILaboratoire";
import { IProjet } from "./IProjet";
import { IUcaRech } from "./IUcaRech";
import { Role } from "./Role";

export interface IMembre{
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    director: boolean;
    role: Role | null;
    laboratoire: {
        id?: number;
        nomLabo?: string;
        etablissement?:{
            id: number; 
        }
    };
    admin?: IAdmin;
    projets?: IProjet[];
    ucaRechs?: IUcaRech[];
    expressionBesoins?: IExpressionBesoin[];
}