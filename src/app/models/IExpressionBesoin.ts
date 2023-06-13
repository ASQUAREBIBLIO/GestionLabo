import { IMembre } from "./IMembre";

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
    membre: {
        id?: number;
        nom: string;
        prenom: string;
    },
    responsable?: {
        id: number;
        nom: string;
        prenom: string;
    };
    typeBesoin: {
        id?: number;
        type?: string;
    };
}