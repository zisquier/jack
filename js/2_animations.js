// Appele de la fonction pour l'animation des lettres quand on passe la souris dessus
TitreSfx (".letter");
    
    
// Activation ON ou OFF de la musique


// On recupère l'élément 
const MUSIC = document.getElementById('sound');

MUSIC.addEventListener('click', () => 
    {
        MUSIC.classList.toggle("activated");
        const STATE = MUSIC.className;
            if(STATE)
                {
                    var x = document.getElementById("audio");
                    x.play();
                    console.log(STATE," : musique activée")
            
                }
            else 
               {
                var x = document.getElementById("audio");
                x.pause(); 
                console.log(STATE," : musique désactivée")
               
                }
    });






// récupère l'élément <a id="img2" class="" href="#">
const PIVOT = document.getElementById('img2');
const PIVOT2 = document.getElementById('img1');

    // Si l'evenement "click" se fait sur le contenu de PIVOT alors on applique la méthode
    PIVOT.addEventListener('click', () =>
        {   
            // on selection la classe présente dans PIVOT et on ajoute "pivoter"
            PIVOT.classList.add("pivoter1");

                // pendant que l'animation est en cours on patiente 1s
                setTimeout(function()
                    {
                        // au bout de 1seconde on retire le nom de la classe 
                        PIVOT.classList.remove("pivoter1");
                        PIVOT.style.display = "none";
                        PIVOT2.style.display = "inline-block";
                        PIVOT2.classList.add("pivoter2");
                    },500);

                setTimeout(function()
                    {
                        PIVOT2.classList.remove("pivoter2");
                    },1000);
        });
    // Si l'evenement "click" se fait sur le contenu de PIVOT alors on applique la méthode
    PIVOT2.addEventListener('click', () =>
        {   
            // on selection la classe présente dans PIVOT et on ajoute "pivoter"
            PIVOT2.classList.add("pivoter1");

                // pendant que l'animation est en cours on patiente 1s
                setTimeout(function()
                    {
                        // au bout de 1seconde on retire le nom de la classe 
                        PIVOT2.classList.remove("pivoter1");
                        PIVOT2.style.display = "none";
                        PIVOT.style.display = "inline-block";
                        PIVOT.classList.add("pivoter2");
                    },500);

                setTimeout(function()
                    {
                        PIVOT.classList.remove("pivoter2");
                    },1000);
        });


