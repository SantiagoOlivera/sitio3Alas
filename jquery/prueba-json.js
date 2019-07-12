console.log("Test");
//copiar tu json en json viewer
//hacer click en remove white space de json viewer
//asignar texto entre comillas simples
var paises = '{"paises":[{"nombre":"Argentina","poblacion":47000000,"colores":["azul","blanco","celeste"]},{"nombre":"Alemania","poblacion":81000000,"colores":["amarillo","rojo","negro"]}]}';


console.log("Esto en un texto:", paises);
//convierte un texto a objeto
var objeto = JSON.parse(paises);

//JSON.stringify() el contrario de JSON.parse()
//Convierte un objeto a cadena de texto


//mostrar obj
console.log("Esto es un objeto", objeto);
//mostrar obj pais primera posicion
console.log(objeto.paises[0]);
//mostrar nombre primer pais
console.log(objeto.paises[0].nombre);
//mostrar segundo color del segundo pais
console.log(objeto.paises[1].colores[1]);