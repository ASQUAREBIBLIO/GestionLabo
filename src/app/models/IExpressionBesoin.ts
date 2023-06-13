import { IMembre } from "./IMembre";
import { IResponsable } from "./IResponsable";
import { ITypeBesoin } from "./ITypeBesoin";

export interface IExpressionBesoin{
    id?: number;
    montantApprox: number;
    dateDem: string;
    dateEffet: string;
    montantEffet: number;
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
    type: {
        id?: number;
        type?: string;
    };
}