   
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




// le menu avec la main

// récupère l'élément <a id="img2" class="" href="#">
const PIVOT = document.getElementById('img2');
const PIVOT2 = document.getElementById('img1');
const TIME_HAND = 350;
const TIME_CLASS = TIME_HAND * 2;

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
                    },TIME_HAND);

                setTimeout(function()
                    {
                        PIVOT2.classList.remove("pivoter2");
                        // on affiche et masque certains elements
                            const TAG = document.querySelector(".tag");
                            console.log("récupéré par tag : ",TAG);
    
                            TAG.classList.add("off");
                            TAG.classList.remove("on");
    
                            const NAV = document.getElementById("navigation");
                            NAV.classList = "on";
                            
                            const NAVTOP = document.querySelector(".navigation-top");
                            console.log("récupéré par navtop : ",NAVTOP);
                            NAVTOP.classList.remove("off");
                            NAVTOP.classList.add("on");
                    },TIME_CLASS);
            



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
                    },TIME_HAND);

                setTimeout(function()
                    {
                        PIVOT.classList.remove("pivoter2");
                        // on affiche et masque certains elements
                        const TAG = document.querySelector(".tag");
                        console.log("récupéré par tag  : ",TAG);
    
                        TAG.classList.add("on");
                        TAG.classList.remove("off");
    
                        const NAV = document.getElementById("navigation");
                        console.log("récupéré par nav : ",NAV);
                        NAV.classList = "off";
    
                        const NAVTOP = document.querySelector(".navigation-top");
                        console.log("récupéré par navtop : ",NAVTOP);
                        NAVTOP.classList.remove("on");
                        NAVTOP.classList.add("off");
                    },TIME_CLASS);



        });


