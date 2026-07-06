export class Piece {
  constructor(nom, surface) {
    this.nom = nom;
    this.surface = surface;
    this.appareils = [];
  }
  
  ajouterAppareil(appareil) {
    this.appareils.push(appareil);
  }
  
  afficherDetails() {
    return {
      nom: this.nom,
      surface: this.surface,
      appareils: this.appareils.map((appareil) => appareil.afficherEtat())
    };
  }
}