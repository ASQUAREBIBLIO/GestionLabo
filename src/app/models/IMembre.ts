import { IAdmin } from "./IAdmin";
import { IExpressionBesoin } from "./IExpressionBesoin";
import { ILaboratoire } from "./ILaboratoire";
import { IProjet } from "./IProjet";
import { IUcaRech } from "./IUcaRech";

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
    projets?: IProjet[];
    ucaRechs?: IUcaRech[];
    expressionBesoins?: IExpressionBesoin[];
}