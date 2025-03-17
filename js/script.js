// Animation effects
const textElement = document.getElementById('text');
const text = "I am Pape Soumaila Traore";
let index = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = textElement.textContent;

    if (!isDeleting) {
        textElement.textContent = text.slice(0, index + 1);
        index++;
    } else {
        textElement.textContent = text.slice(0, index - 1);
        index--;
    }

    // Si le texte est entièrement écrit, commence à supprimer
    if (index > text.length) {
        isDeleting = true;
    }

    // Si le texte est entièrement supprimé, recommence à écrire
    if (index === 0) {
        isDeleting = false;
    }

    // Vitesse d'écriture et de suppression
    setTimeout(typeWriter, isDeleting ? 50 : 100);
}

// Démarrer l'animation
typeWriter();