import { IMembre } from "./IMembre";

export interface IProjet{
    id?: number;
    nom: string;
    dateDebut: Date;
    dateFin: Date;
    budget: number;
    membres?: IMembre[];
}