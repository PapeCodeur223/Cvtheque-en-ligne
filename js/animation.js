// Animation Scroll vers le haut

// Fonction pour vérifier si un élément est dans la vue
const checkVisibility = () => {
    const elements = document.querySelectorAll('.animate-slide-up');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Si l'élément est dans la vue
        if (elementTop < window.innerHeight && elementBottom >= 0) {
            element.classList.add('visible'); // Ajoute la classe "visible"
        }
    });
};

// Écouter l'événement de défilement
window.addEventListener('scroll', checkVisibility);

// Vérifier la visibilité au chargement de la page
window.addEventListener('load', checkVisibility);

// Fin animation scroll


// Configuration de l'IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Ajoute la classe "visible" pour déclencher l'animation
            entry.target.classList.add('visible');

            // Arrête d'observer l'élément après qu'il soit visible (optionnel)
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 // Déclenche l'animation lorsque 50% de l'élément est visible
});

// Observer les éléments avec la classe .animate-slide-right
document.querySelectorAll('.animate-slide-right').forEach((element) => {
    observer.observe(element);
});

// Observer les éléments avec la classe .animate-slide-down
document.querySelectorAll('.animate-slide-down').forEach((element) => {
    observer.observe(element);
});


// Observer les éléments avec la classe .animate-slide-left
document.querySelectorAll('.animate-slide-left').forEach((element) => {
    observer.observe(element);
});
