export class Film {
    titre!: string
    constructor(titre: string){
      this.titre = titre;
    }
  
    disbonjour(): void {
      console.log("bjr" + this.titre);
      
    }
  }

export interface Acteur {
    nom: string
    prenom: string
    listFilm?: Film[]
}
  