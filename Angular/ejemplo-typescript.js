//
console.log("hola");
//Nombre solo acepta string
/* function saludar(nombre: string){
    return `Hola ${nombre}!!!!!`;
} */
/*  ? Esto indoca que el parametro es opcional */
function saludar(nombre, apellido) {
    /* if(apellido) ? return `Hola ${nombre}  ${apellido}!!!!!` : return `Hola ${nombre}`; */
    if (apellido) {
        return "Hola " + nombre + "  " + apellido + "!!!!!";
    }
    else {
        return "Hola " + nombre;
    }
}
saludar("Santi", "adasdj");
console.log(saludar("Santiago", "Olivera"));
function completar(nombre, apellido) {
    if (apellido === void 0) { apellido = "Perez"; }
    return "Hola " + nombre + "  " + apellido;
}
console.log(completar("Santiago"));
//completar("Santiago", "Olivera");
