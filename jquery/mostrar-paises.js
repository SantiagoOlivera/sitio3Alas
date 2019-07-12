console.log("Test");

var lista = JSON.parse(
    '{"paises":[{"nombre":"Argentina","poblacion":47000000,"colores":["azul","blanco","celeste"]},{"nombre":"Alemania","poblacion":81000000,"colores":["amarillo","rojo","negro"]},{"nombre":"Francia","poblacion":21000000,"colores":["azul","blanco","rojo"]}]}'
);
console.log(lista);
//Cuantos items tengo
console.log(lista.paises.length);
var cant = lista.paises.length;

for(var i=0; i<cant; i++){
    console.log(lista.paises[i].nombre);
    var el = document.createElement('li');
    el.innerHTML = lista.paises[i].nombre;
    listado.appendChild(el);
}