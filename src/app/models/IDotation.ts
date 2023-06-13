export interface IDotation{
    id: {
        membreId: number;
        ucaRechId: number;
    };
    dotationMembre: number;
    membre: {
        nom: string;
        prenom: string;
    };
    ucaRech: {
        annee: string
    }
}