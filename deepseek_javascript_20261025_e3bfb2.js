// script.js
document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('save-contact');

    saveBtn.addEventListener('click', () => {
        // 1. Définition des données de la vCard
        // On utilise le format 3.0, le plus compatible (iOS/Android/Outlook)
        const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Nom;Prénom;;;
FN:Prénom Nom
ORG:Nom de votre Cabinet
TITLE:Courtier
TEL;TYPE=WORK,VOICE:+33612345678
EMAIL;TYPE=WORK:contact@votre-domaine.com
URL:https://votre-site.com
END:VCARD`;

        // 2. Création du fichier (Blob)
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);

        // 3. Création d'un lien temporaire pour déclencher le téléchargement
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contact.vcf'; // Le nom du fichier téléchargé
        document.body.appendChild(a);
        a.click();

        // 4. Nettoyage
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});