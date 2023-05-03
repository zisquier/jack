// Effet sool sur les titres quand on passe la souris dessus
function TitreSfx (variable1) 
        {
            // je recupère une NodeList
            const MES_ELEMENTS = document.querySelectorAll(variable1); 

            // Pour chacun (For each) de MES_ELEMENTS de ma NodeList je récupère un 
            // élement dans ma constante "un_element"
            MES_ELEMENTS.forEach(un_element => 
                {
                    // ici je recupère le nom de la class de mon élément
                    const la_classe = un_element.className;
                 
                    // je test "un_element" si la souris passe dessus
                    un_element.addEventListener("mouseover",() => 
                    {
                        // si c'est true alors on ajoute la classe "run-effect"
                        un_element.classList.add("run-effect");
                    });
                    
                    //je test "un_element" si la souris ne passe plus dessus
                    un_element.addEventListener("mouseout",() => 
                        {   
                            // si oui alors on déclenche une durée de 1seconde
                            setTimeout(function()
                                {
                                    // à la fin des 1 seconde on retire la classe "run-effect" 
                                    un_element.classList.remove("run-effect");
                                },1000);
                        });
                });
        }
// Appele de la fonction pour l'animation des lettres quand on passe la souris dessus
TitreSfx (".letter");


// les lettre des titre apparaissent au fur et a mesure
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
              delay_start += delay-10 * letters.length;
            });
        }

        

