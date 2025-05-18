# NEF TRANSIT EXPRESS SARL - Site Web Officiel

Ce dépôt contient le code source du site web officiel de NEF TRANSIT EXPRESS SARL, une entreprise spécialisée dans les services de transit et de dédouanement au Cameroun.

## Table des matières
- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Configuration requise](#configuration-requise)
- [Installation](#installation)
- [Lancement du projet](#lancement-du-projet)
- [Structure du projet](#structure-du-projet)
- [Configuration des emails](#configuration-des-emails)
- [Déploiement](#déploiement)
- [Maintenance](#maintenance)

## Aperçu

Le site web de NEF TRANSIT EXPRESS SARL présente les services de l'entreprise dans le domaine du transit douanier et de la logistique. Il offre une interface moderne et responsive adaptée à tous les types d'appareils.

## Fonctionnalités

- **Présentation de l'entreprise** - Section "À propos" détaillant l'histoire et les valeurs de l'entreprise
- **Catalogue de services** - Présentation des différents services offerts (Transit, Douane, Livraison Express, Conseil)
- **Section partenaires** - Affichage des entreprises et institutions partenaires avec carousel interactif
- **Formulaire de contact** - Permettant aux visiteurs d'envoyer des messages directement à l'entreprise
- **Demande de devis** - Section dédiée pour demander un devis personnalisé
- **Design responsive** - Adaptation optimale à tous les types d'écrans (mobile, tablette, ordinateur)

## Technologies utilisées

- **Frontend**:
  - React.js
  - TypeScript
  - Tailwind CSS
  - Framer Motion (animations)
  - Swiper (carousels)
  - React Query (gestion des requêtes)

- **Backend**:
  - Node.js
  - Express
  - Nodemailer (envoi d'emails)

- **Base de données**:
  - Stockage en mémoire (pour l'environnement de développement)

## Configuration requise

- Node.js (v16.0.0 ou supérieur)
- npm (v7.0.0 ou supérieur)

## Installation

1. Clonez ce dépôt sur votre machine locale
   ```bash
   git clone <url-du-dépôt>
   cd nef-transit-website
   ```

2. Installez les dépendances
   ```bash
   npm install
   ```

3. Configurez les variables d'environnement
   - Créez un fichier `.env` à la racine du projet
   - Ajoutez les variables suivantes:
     ```
     SMTP_HOST=votre-serveur-smtp
     SMTP_PORT=port-smtp
     SMTP_USER=votre-email
     SMTP_PASS=votre-mot-de-passe
     SMTP_SECURE=true-ou-false
     ```

## Lancement du projet

Pour lancer le projet en mode développement:

```bash
npm run dev
```

Cela démarre:
- Le serveur backend sur le port 5000
- Le serveur de développement frontend

Visitez `http://localhost:5000` dans votre navigateur pour voir le site.

## Structure du projet

```
.
├── client/                 # Code frontend
│   ├── src/
│   │   ├── assets/         # Images et autres fichiers statiques
│   │   ├── components/     # Composants React
│   │   ├── hooks/          # Hooks personnalisés
│   │   ├── icons/          # Icônes SVG
│   │   ├── lib/            # Utilitaires et types
│   │   ├── pages/          # Pages de l'application
│   │   ├── App.tsx         # Composant principal
│   │   └── main.tsx        # Point d'entrée
│   └── index.html          # Template HTML
│
├── server/                 # Code backend
│   ├── index.ts            # Point d'entrée du serveur
│   ├── routes.ts           # Définition des routes API
│   ├── storage.ts          # Gestion du stockage des données
│   ├── mail.ts             # Configuration et envoi d'emails
│   └── vite.ts             # Configuration de Vite
│
├── shared/                 # Code partagé entre frontend et backend
│   └── schema.ts           # Schémas de données et types
│
├── public/                 # Fichiers statiques publics
│
└── package.json            # Dépendances et scripts
```

## Configuration des emails

Le site utilise Nodemailer pour envoyer les emails des formulaires (contact et demande de devis) à l'adresse email `contact@neftransit.net`.

Pour configurer l'envoi d'emails:

1. Assurez-vous que les variables d'environnement SMTP sont correctement configurées (voir [Installation](#installation))
2. Les templates d'emails sont définis dans `server/mail.ts`
3. Les emails sont envoyés lorsqu'un utilisateur soumet un formulaire de contact ou de demande de devis

## Déploiement

Pour déployer le site en production:

1. Construisez le projet
   ```bash
   npm run build
   ```

2. Les fichiers de production se trouveront dans le dossier `dist/`

3. Déployez ces fichiers sur votre serveur de production

## Maintenance

Pour mettre à jour le site:

1. Modifiez les fichiers nécessaires
2. Testez les changements en local avec `npm run dev`
3. Construisez le projet avec `npm run build`
4. Déployez les fichiers mis à jour sur le serveur de production

Pour toute question ou support, contactez [contact@neftransit.net](mailto:contact@neftransit.net).