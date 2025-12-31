function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent("toolbar-container", "components/toolbar.html");
loadComponent("editor-container", "components/editor.html");
