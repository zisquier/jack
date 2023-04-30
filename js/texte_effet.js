window.addEventListener("DOMContentLoaded", (event) => {
  animate_text();
});


function animate_text() 
{
 // Je déclare mes variables utiles
  let delay = 100 ;
  let delay_start = 0 ;
  let contents ;
  let letters ;

 // Je recupère dans MES_ELEMENTS tous les éléments span
  const MES_ELEMENTS = document.querySelectorAll("span");

/* Pour chacun (ForEach) de MES_ELEMENTS (chaque <span>) je créer une fonctione anonyme 
dans laquelle on envoye 1 de  MES_ELEMENTS ---> element */
MES_ELEMENTS.forEach(function (element) 
    {
    // on récupère dans la variable 'content' le texte contenu entre les balises selectionées
      contents = element.textContent.trim();
    // si je l'enlève çà double mes lettre mais j'ai pas compris à quoi çà sert
      element.textContent = "";
    // On convertie des lettres (string) au format tableau (array)
      letters = contents.split("");
    // on ajoute à l'élément span un parametre  style="visibility: visible;"
      element.style.visibility = 'visible';

      letters.forEach(function (letter) 
        {
          setTimeout(function () 
            {
              element.textContent += letter;
            }, delay_start + delay);
        });    
      delay_start += delay * letters.length;
    });
}