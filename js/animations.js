        function MaFonction (variable1) 
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
    

    const MON_ELEMENT = document.querySelector("html");
        window.addEventListener("DOMContentLoaded", () => 
            {
                MON_ELEMENT.classList.add("in");
            });
      
    MaFonction (".letter");
    
    
    
    const MUSIC_ON = document.getElementById('sound');
    
    MUSIC_ON.addEventListener('click', () => 
        {
        MUSIC_ON.classList.toggle("activated");
        console.log(MUSIC_ON); 
        
        var x = document.getElementById("audio");
        x.play(); 
    })
    
    
    