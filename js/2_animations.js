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
                    console.log("Non mais Mossieur BDCIron tu es trop curieux dit donc !!! ")
                }
            else 
               {
                var x = document.getElementById("audio");
                x.pause(); 
                console.log(STATE," : musique désactivée")
                console.log("Nan mais ouste !!!!!")
                }
    });

// récupère l'élément
const PIVOT = document.getElementById('img2');
// console.log("PIVOT reçoit : ",PIVOT);

PIVOT.addEventListener('click', () =>
    {
        PIVOT.classList.toggle("pivoter");
        
    });


