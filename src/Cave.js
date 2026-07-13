import { Piece } from "./Piece.js";

export class Cave extends Piece {
  constructor(surface, temperature) {
    super("Cave", surface);
    this.temperature = temperature;
  }

  afficherTemperature() {
    return `La cave est à ${this.temperature}°C`;
  }
}