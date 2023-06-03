import { IMembre } from "./IMembre";

export interface IUcaRech{
    id: number;
    annee: Date;
    source: string;
    budget: number;
    membres?: IMembre[];
}