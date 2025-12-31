window.exportPDF = async function() {
    const editor = getEditor();
    if (!editor) return alert("Éditeur non trouvé !");

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10; // marge autour du contenu

    // Capturer tout l'éditeur en canvas
    const canvas = await html2canvas(editor, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const imgWidth = pageWidth - 2 * margin;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = margin;

    // Ajouter la première page
    pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight - 2 * margin;

    // Ajouter des pages si nécessaire
    while (heightLeft > 0) {
        pdf.addPage();
        position = -heightLeft + margin;
        pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight - 2 * margin;
    }

    pdf.save("document.pdf");
};


window.exportDOCX = async function() {
    const { Document, Packer, Paragraph } = window.docx;

    const editor = getEditor();
    if (!editor) return alert("Éditeur non trouvé !");

    // Créer un document DOCX avec chaque ligne de l'éditeur
    const doc = new Document({
        sections: [{
            properties: {},
            children: editor.innerText.split("\n").map(line => new Paragraph(line))
        }]
    });

    // Générer le blob et déclencher le téléchargement
    const blob = await Packer.toBlob(doc);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function initImageInsert() {
    const insertImageBtn = document.getElementById("insert-image-btn");
    const imageInput = document.getElementById("image-input");

    if (!insertImageBtn || !imageInput) return;

    // Ouvrir le navigateur de fichiers
    insertImageBtn.addEventListener("click", () => {
        imageInput.click();
    });

    // Quand l'utilisateur choisit une image
    imageInput.addEventListener("change", () => {
        const file = imageInput.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const editor = getEditor();
            if (!editor) return;

            focusEditor();

            const img = document.createElement("img");
            img.src = e.target.result; // base64
            img.style.maxWidth = "100%";
            img.style.height = "auto";

            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0) {
                editor.appendChild(img);
                return;
            }

            const range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(img);
            range.setStartAfter(img);
            range.setEndAfter(img);
            selection.removeAllRanges();
            selection.addRange(range);
        };

        reader.readAsDataURL(file);

        // Réinitialiser l’input pour permettre de réinsérer la même image
        imageInput.value = "";
    });
}

const insertImageBtn = document.getElementById("insert-image-btn");
const imageInput = document.getElementById("image-input");

insertImageBtn.addEventListener("click", () => {
    imageInput.click(); // ouvre le navigateur de fichiers
});

imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const editor = getEditor();
        if (!editor) return;

        focusEditor();

        const img = document.createElement("img");
        img.src = e.target.result; // base64
        img.style.maxWidth = "100%";
        img.style.height = "auto";

        // Insérer l'image à la position du curseur
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) {
            editor.appendChild(img);
            return;
        }

        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(img);

        range.setStartAfter(img);
        range.setEndAfter(img);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    reader.readAsDataURL(file);

    // Réinitialiser l’input pour permettre de réinsérer la même image
    imageInput.value = "";
});
