
const STORAGE_KEY = AppSettings.STORAGE_KEY;

/**
 * Sauvegarde le contenu de l'éditeur dans localStorage
 */
function saveEditorContent() {
    const content = getEditorContent();
    localStorage.setItem(STORAGE_KEY, content);
}

/**
 * Recharge le contenu de l'éditeur depuis localStorage
 */
function loadEditorContent() {
    const savedContent = localStorage.getItem(STORAGE_KEY);
    if (savedContent) {
        setEditorContent(savedContent);
    }
}

/**
 * Initialise la sauvegarde automatique
 */
function initAutoSave() {
    const editor = getEditor();
    if (!editor) return;

    // Charger le contenu sauvegardé au démarrage
    loadEditorContent();

    // Écouter les changements
    editor.addEventListener("input", () => {
        saveEditorContent();
    });
}
