const editor = getEditor();
editor.style.fontFamily = AppSettings.EDITOR.DEFAULT_FONT_FAMILY;
editor.style.fontSize = AppSettings.EDITOR.DEFAULT_FONT_SIZE;
editor.style.color = AppSettings.EDITOR.DEFAULT_COLOR;
editor.innerHTML = `<p>${AppSettings.EDITOR.PLACEHOLDER_TEXT}</p>`;


/**
 * Récupère l'élément éditeur
 */
function getEditor() {
    return document.getElementById("editor");
}

/**
 * Récupère le contenu HTML de l'éditeur
 */
function getEditorContent() {
    const editor = getEditor();
    return editor ? editor.innerHTML : "";
}

/**
 * Met à jour le contenu de l'éditeur
 * @param {string} content - Contenu HTML
 */
function setEditorContent(content) {
    const editor = getEditor();
    if (editor) {
        editor.innerHTML = content;
    }
}

/**
 * Donne le focus à l'éditeur
 */
function focusEditor() {
    const editor = getEditor();
    if (editor) {
        editor.focus();
    }
}

/**
 * Vérifie si l'éditeur est vide
 */
function isEditorEmpty() {
    const editor = getEditor();
    if (!editor) return true;

    return editor.innerText.trim() === "";
}
