# Contribuer au projet

Merci de vouloir contribuer à MaisonConnect. Ce document décrit les règles à suivre pour que le projet reste cohérent et facile à maintenir.

## Avant de commencer

1. Vérifiez qu'une [issue](https://github.com/YounessNB94/projet-github-leo-youness/issues) existe déjà pour le travail que vous voulez faire, sinon créez-en une à partir d'un des templates disponibles (`Bug report` ou `Feature request`).
2. Assignez-vous l'issue pour éviter de travailler en double avec votre binôme.

## Workflow Git

1. Créez une branche à jour depuis `dev` :

   ```bash
   git checkout dev
   git pull
   git checkout -b feature/nom-fonctionnalite
   ```

2. Nommez la branche selon son type :
   - `feature/nom-fonctionnalite` — nouvelle fonctionnalité
   - `fix/nom-correction` — correction de bug
   - `hotfix/nom-correction-urgente` — correction urgente sur `prod`

3. Faites des commits signés, avec des messages clairs et en français :

   ```bash
   git commit -S -m "ajout de la méthode allumer"
   ```

4. Avant de pousser, vérifiez que le linter passe :

   ```bash
   npm run lint
   ```

5. Poussez la branche et ouvrez une pull request vers `dev` (jamais directement vers `prod`) :

   ```bash
   git push
   ```

6. Dans la description de la pull request, remplissez le template et reliez l'issue correspondante avec `Closes #<numéro>` afin qu'elle se ferme automatiquement au merge.

## Règles de merge

Les branches `dev` et `prod` sont protégées : une pull request est obligatoire, les commits doivent être signés, et le workflow CI (`lint`) doit passer avant de pouvoir merger.

## Releases

Les mises en production se font via une branche `release-x.y.z` créée depuis `dev`, avec une pull request vers `prod`.
