# MaisonConnect

![Lint](https://github.com/YounessNB94/projet-github-leo-youness/actions/workflows/lint.yml/badge.svg)

MaisonConnect est une mini-application JavaScript orientée objet permettant de modéliser une maison connectée.

## Fonctionnalités

- Créer une maison
- Ajouter des pièces
- Ajouter des appareils dans les pièces
- Allumer ou éteindre des appareils
- Gérer une cave
- Gérer un coffre-fort avec un code secret

## Installation

```bash
npm install
```

## Utilisation

```bash
npm start
```

## Qualité de code

Le projet utilise ESLint, exécuté automatiquement avant chaque commit (hook Husky) et sur chaque push/pull request (GitHub Actions).

```bash
npm run lint
```

## Structure du projet

```
src/
├── Maison.js       # Classe principale : gère les pièces de la maison
├── Piece.js         # Classe représentant une pièce et ses appareils
├── Appareil.js       # Classe représentant un appareil connecté
└── Coffre-fort.js     # Gestion du coffre-fort à code secret
```

## Contribuer

Les règles de contribution (branches, commits, pull requests) sont détaillées dans [CONTRIBUTING.md](CONTRIBUTING.md). Merci de lire également notre [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Licence

MIT
