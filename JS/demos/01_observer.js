console.log("Test");
//Intersection observer


//let titulo = document.querySelector("h1");

//nueva instancia de Intersectional Observer
/* observarTitulo = new IntersectionObserver((entry) => {
        console.log(entry);
    }
);
 */

//observarTitulo.observe(titulo);


//observar elemento hola
//si isIntersection es entonces 
//element.style.backgroundColor = green;

/* let elementRandom = document.querySelector(".hola");
//e nombre del evento y nos permite conocer la info de ese evento
observarElementRandom = new IntersectionObserver((e) => {
    console.log(e);
    if(e[0].isIntersecting === true){
        elementRandom.style.backgroundColor = "green";
    }else{
        elementRandom.style.backgroundColor = "hotpink";
    }

});
observarElementRandom.observe(elementRandom); */



//Observar varios elementos
//activar y desactivar .especial
let elementos = document.querySelectorAll(".random");

observarElementos = new IntersectionObserver((e) => {
    console.log(e);
    for(var i=0; i<e.length; i++){
        console.log("Elemento:", e[i]);
        console.log("Status:", e[i].isIntersecting);
        if(e[i].isIntersecting === true){
            e[i].target.classList.toggle("especial");
        }
    }
});

elementos.forEach( elemento => {
    observarElementos.observe(elemento);
});


