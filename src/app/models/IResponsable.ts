import { IExpressionBesoin } from "./IExpressionBesoin";

export interface IResponsable{
    id: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    role: any;
    expressionBesoins?: IExpressionBesoin[];
}