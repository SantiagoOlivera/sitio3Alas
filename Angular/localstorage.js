console.log("Test");
/* setUtem crea un nueva item en localStorage */
localStorage.setItem("nombre", "Santiago"); /* Ver en Aplication/Storage */

/* getItem para mostar */
mostrar.innerHTML = localStorage.getItem("nombre");


boton.addEventListener("click", sumar);

cantidad.innerHTML = localStorage.getItem("cantidad");

function sumar(){
    //consigo la cantidad actual
    console.log("Le diste click:");
    var cant = localStorage.getItem("cantidad");
    //cant++
    cant ++;
    localStorage.setItem("cantidad", cant);
    //Actualizar el valor en el HTML
    cantidad.innerHTML = localStorage.getItem("cantidad");
}