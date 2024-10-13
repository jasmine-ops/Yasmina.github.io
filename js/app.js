console.log('salut !');
// Exécuter ce script lorsque le DOM (structure HTML) est entièrement chargé
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne l'élément avec l'ID 'loader' qui recouvre l'écran
    let loader = document.getElementById("loader");

    // Sélectionne l'élément avec l'ID 'progress' qui est la barre de progression
    let progress = document.getElementById("progress");

    // Sélectionne l'élément avec l'ID 'percentage' pour afficher le pourcentage du chargement
    let percentage = document.getElementById("percentage");

    // Initialise une variable 'load' à 0, qui représente le pourcentage de chargement
    let load = 0;

    // Crée un intervalle qui se répète toutes les 50 millisecondes
    let interval = setInterval(() => {
        load++; // Incrémente le pourcentage de chargement

        // Met à jour la largeur de la barre de progression en fonction de la variable 'load'
        progress.style.width = load + '%';

        // Met à jour le texte du pourcentage affiché
        percentage.innerText = load + '%';

        // Si le chargement atteint 100%, on arrête l'intervalle et on masque le loader
        if (load === 100) {
            clearInterval(interval); // Arrête l'intervalle une fois à 100%
            loader.classList.add('hidden'); // Ajoute la classe 'hidden' pour masquer le loader
        }
    }, 50); // Répète le code toutes les 50ms (ajuste ce temps pour accélérer ou ralentir le chargement)
});
//pour la bande
document.addEventListener("DOMContentLoaded", function() {
    const description = document.querySelector('.description');
    const carousel = document.querySelector('.carousel');

    // Après que la bande ait fini de descendre
    setTimeout(() => {
        description.style.opacity = '1'; // Rendre visible
        description.style.transform = 'translateY(0)'; // Remonter
        carousel.style.opacity = '1'; // Rendre visible
        carousel.style.transform = 'translateY(0)'; // Remonter
    }, 1000); // Attendre 1 seconde pour que la bande ait fini de descendre
});

const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateCarousel() {
  // Calcule la nouvelle position de défilement
  const offset = -currentIndex * 100; // Ajuste le décalage
  track.style.transform = `translateX(${offset}%)`; // Applique le décalage
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Passe à l'image suivante
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Retourne à l'image précédente
  updateCarousel();
});
