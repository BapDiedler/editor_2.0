/**
 * Paramètres généraux de l'application
 */
const AppSettings = {
    // Clé utilisée pour la sauvegarde dans localStorage
    STORAGE_KEY: "textEditorContent",

    // Options de l'éditeur
    EDITOR: {
        DEFAULT_FONT_FAMILY: "Calibri, Arial, sans-serif",
        DEFAULT_FONT_SIZE: "16px",
        DEFAULT_COLOR: "#000000",
        MIN_HEIGHT: "450px",
        PLACEHOLDER_TEXT: "Commencez à écrire ici..."
    },

    // Options de la toolbar
    TOOLBAR: {
        SHOW_BOLD: true,
        SHOW_ITALIC: true,
        SHOW_UNDERLINE: true,
        SHOW_ALIGN: true,
        SHOW_LISTS: true,
        SHOW_COLOR_PICKER: true
    }
};
