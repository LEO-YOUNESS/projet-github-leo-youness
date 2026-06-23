export class Maison {
  constructor(adresse) {
    this.adresse = adresse;
    this.pieces = [];
  }

  ajouterPiece(piece) {
    this.pieces.push(piece);
  }

  afficherMaison() {
    return {
      adresse: this.adresse,
      nombreDePieces: this.pieces.length,
      pieces: this.pieces.map((piece) => piece.afficherDetails())
    };
  }
}