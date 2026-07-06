export class Piece {
  constructor(nom, surface) {
    this.nom = nom;
    this.surface = surface;
    this.appareils = [];
  }
  
  ajouterAppareil(appareil) {
    this.appareils.push(appareil);
  }
}