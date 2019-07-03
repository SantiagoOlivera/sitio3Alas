//seleccionar por id
var pepe = document.getElementById("titulo");
 console.log(pepe);

 //Seleccionar por clase
 var parrafos = document.getElementsByClassName("parrafo");
 console.log(parrafos);

 //seleccionar por etiqueta
 var etiquetas = document.getElementsByTagName("p");
 console.log(etiquetas);

//querySelector /querySelectorAll
var tituloQuery = document.querySelector('#titulo');
console.log(tituloQuery);

//devuelve el solo el primer elemento que encuentra
var parrafosQuery = document.querySelector('.parrafo');
console.log(parrafosQuery);

var todos = document.querySelectorAll('.parrafo');
console.log(todos);