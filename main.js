"use strict";
 // je recupere ma collection des images
const images = document.getElementsByClassName('image');
 // je recupere les deux boutons 
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
 // declaretion de la position d'image à afficher
let current = 0;
 // la fonction qui fait defiler les images en boucle en utilisant les boutons
function carousel() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  
  // pour afficher l'image précédente on décrément
  prevButton.addEventListener('click', () => {
    images[current].style.display = "none";

    if (current == 0) {
      current = images.length - 1;
    } else {
      current--;
    }
    images[current].style.display = "inline";

  });

  // pour afficher l'image suivante on incrément
  nextButton.addEventListener('click', () => {
    images[current].style.display = "none";

    if (current == images.length - 1) {
      current = 0;
    } else {
      current++;
    }
    images[current].style.display = "inline";

  });

  // Afficher la première image initialement
  images[current].style.display = "inline";
}

carousel();



