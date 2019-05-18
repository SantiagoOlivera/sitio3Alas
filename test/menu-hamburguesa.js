// Comentario
// JavaScript
// javaScript // camelCase

// toggle es el id de nuestro boton
// Seleccionamos al boton con ID toggle y le decimos que escuche el evento click 
toggle.addEventListener(
    // va a escuchar el evento click
    "click", 
    function(){
        console.log("Hiciste click");
        //menu.classList.add("mostrar");
        //classList
        // add
        // remove
        // toggle(apaga y prende)
        menu.classList.toggle("mostrar");
    }
    
);