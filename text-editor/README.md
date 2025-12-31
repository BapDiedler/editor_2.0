📝 Text Editor – Application type Word
📌 Description

Ce projet est une application web d’édition de texte inspirée de Microsoft Word.
Elle permet de saisir du texte, de le mettre en forme (gras, italique, souligné…), et de sauvegarder le contenu localement.

Le projet est conçu pour être :

simple à comprendre

évolutif

bien structuré

idéal pour un projet scolaire ou personnel

🛠️ Technologies utilisées

HTML5

CSS3

JavaScript (Vanilla JS)

API contenteditable

LocalStorage

📂 Architecture du projet
text-editor/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── editor.js
│   │   ├── toolbar.js
│   │   └── storage.js
│   └── images/
│       └── icons/
├── components/
│   ├── toolbar.html
│   └── editor.html
└── config/
    └── settings.js

🚀 Étapes de réalisation (pas à pas)
1️⃣ Création du projet
1.1 Créer l’architecture

Exécute le script Bash fourni :

./create-text-editor.sh


Ou crée les dossiers manuellement selon la structure ci-dessus.

2️⃣ Création de la page principale (index.html)
Objectif

Charger les composants

Afficher la toolbar et l’éditeur

Lier les fichiers CSS et JS

Étapes

Ajouter les balises HTML de base

Lier style.css

Inclure les scripts JS

Charger les composants HTML

3️⃣ Création de l’éditeur (editor.html)
Objectif

Zone de texte éditable

Fonctionnalité

Utilisation de contenteditable="true"

Exemple :

<div id="editor" contenteditable="true">
  Commence à écrire ici...
</div>

4️⃣ Création de la barre d’outils (toolbar.html)
Objectif

Boutons de mise en forme

Boutons à implémenter

Gras

Italique

Souligné

Alignement

Listes

Chaque bouton appelle une fonction JavaScript.

5️⃣ Stylisation (style.css)
Objectif

Interface claire et agréable

À faire

Style de la toolbar

Style de l’éditeur

Espacement

Police de caractères

6️⃣ Logique de l’éditeur (editor.js)
Objectif

Gérer le contenu de l’éditeur

Fonctions possibles

Récupérer le texte

Mettre à jour le contenu

Gérer le focus

7️⃣ Gestion des commandes (toolbar.js)
Objectif

Appliquer les styles (gras, italique, etc.)

Exemple
function formatText(command) {
  document.execCommand(command, false, null);
}

8️⃣ Sauvegarde automatique (storage.js)
Objectif

Sauvegarder le texte automatiquement

Étapes

Écouter les changements

Sauvegarder dans localStorage

Recharger le contenu au démarrage

9️⃣ Fichier principal (main.js)
Objectif

Initialiser l’application

Responsabilités

Charger les composants

Activer la sauvegarde

Lancer les scripts nécessaires

🔐 Configuration (settings.js)
Objectif

Centraliser les paramètres

Exemples :

Nom de la clé LocalStorage

Options de l’éditeur

Paramètres par défaut

🧪 Tests manuels

À vérifier :

Le texte s’écrit correctement

Les boutons fonctionnent

La sauvegarde persiste après rafraîchissement

Aucun message d’erreur dans la console

🌱 Améliorations possibles

Export PDF / DOCX

Insertion d’images

Mode sombre

Compte utilisateur

Collaboration en temps réel

Correcteur orthographique

Historique des versions

📦 Déploiement

Options simples :

GitHub Pages

Netlify

Vercel

👨‍💻 Auteur

Projet réalisé à des fins pédagogiques.
Libre à modifier, améliorer et redistribuer.

📄 Licence

Projet open-source – utilisation libre.