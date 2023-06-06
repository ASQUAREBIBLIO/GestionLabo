import { IMembre } from "./IMembre";

export interface ILaboratoire{
    id: number;
    nomLabo: string;
    etablissement: {
        id: number;
        nom: string;
    }
    membres?: [
        {
            id: number;
        }
    ]
}