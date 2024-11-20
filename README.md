
# Gestion des Patients - Application Web

Ce projet est une application web pour la gestion des patients, des rapports de santé, des consultations vidéo et des détails des patients. Elle permet de suivre l'état des patients, de consulter des rapports médicaux, de gérer les demandes de consultation vidéo et bien plus encore.

Ce projet entre dans le cadre de la compétition nationale "Lets challenge" organisé par l'université Hassan 2 a Settat.

## Fonctionnalités principales
- **Liste des Patients** : Affiche une liste de tous les patients avec leurs informations principales.
- **Détails des Patients** : Fournit des informations détaillées sur chaque patient, y compris leurs antécédents médicaux et traitements.
- **Rapports de Santé** : Permet de visualiser les rapports médicaux associés à chaque patient.
- **Consultations Vidéo** : Affiche les demandes de consultation vidéo des patients et permet de gérer ces demandes.

## Technologies utilisées

- **Frontend** :
  - React.js : pour la gestion des composants et l'interaction avec l'API.
  - CSS3 : pour le style des pages et composants.
  - React Router : pour la gestion de la navigation entre les différentes pages.
  - Chart.js : pour afficher des graphiques interactifs des statistiques des patients.

- **Backend** :
  - Consomme des donnees vis firebase
  - JWT : pour l'authentification des utilisateurs.

## Installation

### Prérequis

### Étapes d'installation

1. Clonez ce repository :
    ```bash
    git clone https://github.com/votre-utilisateur/gestion-patients.git
    ```

2. Installez les dépendances du projet :
    - Pour le backend :
      ```bash
      cd backend
      npm install
      ```
    - Pour le frontend :
      ```bash
      cd frontend
      npm install
      ```


5. Démarrez le frontend :
    ```bash
    cd frontend
    npm start
    ```

6. Accédez à l'application via `http://localhost:3000` dans votre navigateur.

## Pages principales

### 1. **Liste des Patients**
- Cette page affiche une liste des patients avec les colonnes suivantes :
  - Nom
  - Prénom
  - Date de naissance
  - Sexe
  - Dernière consultation
  - Etat
- Un bouton **Voir Détails** permet de naviguer vers la page des détails du patient.

### 2. **Détails du Patient**
- Affiche des informations détaillées sur un patient, y compris :
  - Antécédents médicaux
  - Traitements en cours
  - Rapports médicaux associés
  - Informations de contact

### 3. **Rapports de Santé**
- Cette page contient une liste de rapports médicaux associés à chaque patient.
- Affiche les rapports sous forme de tableau avec les colonnes suivantes :
  - Titre
  - Date
  - Type de rapport
  - Lien vers le rapport détaillé

### 4. **Consultations Vidéo**
- Liste des demandes de consultation vidéo avec les colonnes :
  - Nom du patient
  - Date de demande
  - Statut de la demande (en attente, en cours, terminée)
  - Bouton **Accepter la demande** ou **Refuser**

## Diagrammes et Statistiques

L'application utilise des graphiques interactifs pour afficher des statistiques sur les patients :
- Graphiques des répartitions par sexe
- Statistiques des consultations et rapports
- Représentation des demandes de consultation vidéo

Les graphiques sont générés avec **Chart.js**.

## Structure du projet

```
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.js
    │   ├── index.js
    │   └── App.css
    └── package.json
```

## Auteurs

 --STAILI MOHAMED


## Licence

Ce projet est sous licence [MIT License](LICENSE).
