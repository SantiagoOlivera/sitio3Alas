//eventos.js
// nombre / focus
// clave / blur

/* nombre.addEventListener(
    "focus",
    //llamar a funcion sin nombre
    function (){
        console.log('Saliste del foco');
    }

); */

nombre.addEventListener(
    "focus",wow
);

function wow(){
    console.log('hiciste click');
}

//blur = evento contrario al foco = lostFocus
// trigger event / disparar eventos
clave.addEventListener(
    "blur",
    function(){
        console.log("abandonaste a clave") ;
        console.log(clave.value.length);
    }
);