export class CoffreFort {
  constructor(codeSecret) {
    this.codeSecret = codeSecret;
    this.estVerrouille = true;
  }
  
  deverrouiller(code) {
    if (code === this.codeSecret) {
      this.estVerrouille = false;
      return "Coffre-fort déverrouillé";
    }

    return "Code incorrect";
  }

  verrouiller() {
    this.estVerrouille = true;
    return "Coffre-fort verrouillé";
  }
}