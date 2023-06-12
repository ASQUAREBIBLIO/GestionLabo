import { IMembre } from "./IMembre";
import { IResponsable } from "./IResponsable";
import { ITypeBesoin } from "./ITypeBesoin";

export interface IExpressionBesoin{
    id?: number;
    montantApprox: number;
    dateDem: Date;
    dateEffet: Date;
    montantEffet: Date;
    isValid: boolean;
    // membre?: {
    //     id: number;
    //     nom: string;
    //     prenom: string;
    // };
    membre?: IMembre;
    responsable?: {
        id: number;
        nom: string;
        prenom: string;
    };
    type?: ITypeBesoin;
}