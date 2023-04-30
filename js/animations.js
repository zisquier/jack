function MaFonction (variable1) 
    {
        const MON_ELEMENT = document.querySelector(variable1);
        MON_ELEMENT.addEventListener("mouseover",() => 
        {
            MON_ELEMENT.classList.add("run-effect");  
        });
        
        MON_ELEMENT.addEventListener("mouseout",() => 
                {
                    setTimeout(function()
                        {
                            MON_ELEMENT.classList.remove("run-effect");
                        },1000); 
                });
    }

    const MON_ELEMENT = document.querySelector(".fade");
    window.addEventListener("DOMContentLoaded", () => 
        {
            MON_ELEMENT.classList.add("in");
        });
    
        
        MaFonction (".letter1");
        MaFonction (".letter2");
MaFonction (".letter3");
MaFonction (".letter4");
MaFonction (".letter5");
MaFonction (".letter6");
MaFonction (".letter7");
MaFonction (".letter8");
MaFonction (".letter9");
MaFonction (".letter10");
MaFonction (".letter11");
MaFonction (".letter12");
MaFonction (".letter13");
MaFonction (".letter14");


const MUSIC_ON = document.getElementById('sound');

MUSIC_ON.addEventListener('click', () => 
    {
    MUSIC_ON.classList.toggle("activated");
    console.log(MUSIC_ON); 
    
    var x = document.getElementById("audio");
    x.play(); 
})





