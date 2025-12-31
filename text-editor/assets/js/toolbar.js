if (!AppSettings.TOOLBAR.SHOW_COLOR_PICKER) {
    document.getElementById("text-color-picker").style.display = "none";
}

/**
 * Applique une commande de mise en forme
 * @param {string} command - Commande execCommand
 */
function formatText(command) {
    focusEditor();
    document.execCommand(command, false, null);
}

/**
 * Applique une commande avec valeur (ex: couleur, taille)
 * @param {string} command
 * @param {string} value
 */
function formatTextWithValue(command, value) {
    focusEditor();
    document.execCommand(command, false, value);
}

// Changer la couleur du texte sélectionné
const colorPicker = document.getElementById("text-color-picker");

if (colorPicker) {
    colorPicker.addEventListener("input", function () {
        const color = this.value;
        formatTextWithValue("foreColor", color);
    });
}

// Couleur par défaut du texte
let currentTextColor = "#000000";

// Sélecteur de couleur
function initColorPicker() {
    const colorPicker = document.getElementById("text-color-picker");
    if (!colorPicker) return;

    // Quand l'utilisateur change la couleur
    colorPicker.addEventListener("input", function () {
        currentTextColor = this.value;

        // Appliquer la couleur au texte sélectionné si il y a sélection
        document.execCommand("foreColor", false, currentTextColor);

        // Mettre la couleur par défaut pour le texte tapé ensuite
        const editor = getEditor();
        if (editor) {
            editor.style.color = currentTextColor;
        }
    });
}

