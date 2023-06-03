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
    membre?: IMembre;
    responsable?: IResponsable;
    type?: ITypeBesoin;
}