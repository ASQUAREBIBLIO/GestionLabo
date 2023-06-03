import { IMembre } from "./IMembre";
import { IUcaRech } from "./IUcaRech";

export interface IMembreUcaRech{
    membre: IMembre;
    ucaRech: IUcaRech;
    dotationMembre: number;
}