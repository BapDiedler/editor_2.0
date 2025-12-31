#!/bin/bash

PROJECT_NAME="text-editor"

echo "📁 Création du projet $PROJECT_NAME..."

# Racine
mkdir -p $PROJECT_NAME
cd $PROJECT_NAME || exit

# Fichiers racine
touch index.html README.md

# Assets
mkdir -p assets/css assets/js assets/images/icons
touch assets/css/style.css
touch assets/js/main.js
touch assets/js/editor.js
touch assets/js/toolbar.js
touch assets/js/storage.js

# Components
mkdir -p components
touch components/toolbar.html
touch components/editor.html

# Config
mkdir -p config
touch config/settings.js

echo "✅ Structure créée avec succès !"
echo "📂 Projet prêt dans le dossier '$PROJECT_NAME'"
