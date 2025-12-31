function exportPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Récupérer le contenu texte
    const editor = getEditor();
    if (!editor) return;

    const text = editor.innerText || "";
    const lines = doc.splitTextToSize(text, 180); // 180 = largeur max du PDF

    doc.text(lines, 10, 10);
    doc.save("document.pdf");
}
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

