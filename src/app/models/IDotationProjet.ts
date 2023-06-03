import { IMembre } from "./IMembre";
import { IProjet } from "./IProjet";

export interface IDotationProjet{
    membre: IMembre;
    projet: IProjet;
    dotation: number;
    isReponsable: boolean;
}