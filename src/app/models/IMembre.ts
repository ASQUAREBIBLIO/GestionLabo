
import { IExpressionBesoin } from "./IExpressionBesoin";
import { IProjet } from "./IProjet";

export interface IMembre{
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    director: boolean;
    laboratoire: {
        id?: number;
        nomLabo?: string;
        etablissement?:{
            id: number;
            nom: string;
        }
    };
    admin: {
        id?: number;
    };
    projets?: IProjet[];
    expressionBesoins?: [
        {
            id: number,
            dateDem: string,
            typeBesoin: {
                id: number,
                type: string,
            }
        }
    ];
}