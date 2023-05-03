// Chargement de toute la page en apparition "fade-in"

    const MON_ELEMENT = document.querySelector("html");
    window.addEventListener("DOMContentLoaded", () => 
        {
            MON_ELEMENT.classList.add("in");
            animate_text();
        });
