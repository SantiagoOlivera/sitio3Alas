//variables.js
var edad = 45;

function algo(){
    var edad1 = 89;
}
console.log("Test");
algo();
console.log("Edad vale:",edad);
//console.log("Edad1:", edad1); //Tira error porque la variable solo existe dentro de la funcion

//cuando no se coloca var ni let la varible se puede modificar desde cualquier funcion, es una varible global para todos los metodos y funciones

/* edad = 18;
if(edad >= 18){
    var mas10 = edad + 10;
    console.log(`En 10 años tendras ${mas10} años`);
}
console.log("Total es:", mas10); */

/* edad = 18;
if(edad >= 18){
    let mas10 = edad + 10;
    console.log(`En 10 años tendras ${mas10} años`);
}
console.log("Total es:", mas10); */


//Block scope (si hay una llave)

var mas10 = edad + 10;
console.log(`En 10 años tendras ${mas10}`);
//let no permite volver a declarar la varible
//usar let no var
//var permite volver a declarar la variable
var mas10 = "Hola mundo";


//esto tira error
//let mas10 = edad + 10;
//console.log(`En 10 años tendras ${mas10}`);
//var mas10 = "Hola mundo";


const nombre = "Eva";
//Esto tira error
//nombre = "Jose";// No se permite cambiar el valor que tienen las varibles de tipo const
console.log(nombre);
