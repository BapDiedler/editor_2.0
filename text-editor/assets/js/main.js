/**
 * Fonction pour charger un composant HTML dans un conteneur
 * @param {string} id - ID du conteneur
 * @param {string} file - Chemin du fichier HTML
 * @param {function} callback - Fonction appelée après le chargement
 */
function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        })
        .catch(err => console.error(`Erreur chargement ${file}:`, err));
}

/**
 * Initialisation complète de l'application
 */
function initApp() {
    // Charger la toolbar
    loadComponent("toolbar-container", "components/toolbar.html", () => {
        // Initialiser le sélecteur de couleur
        if (typeof initColorPicker === "function") {
            initColorPicker();
        }
    });

    // Charger l'éditeur
    loadComponent("editor-container", "components/editor.html", () => {
        // Initialiser la sauvegarde automatique
        if (typeof initAutoSave === "function") {
            initAutoSave();
        }

        // Donner le focus à l'éditeur
        if (typeof focusEditor === "function") {
            focusEditor();
        }
    });
}

// Lancer l'application une fois le DOM chargé
document.addEventListener("DOMContentLoaded", initApp);
