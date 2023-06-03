import { IMembre } from "./IMembre";

export interface ILaboratoire{
    id: number;
    nomLabo: string;
    membres?: IMembre[];
}