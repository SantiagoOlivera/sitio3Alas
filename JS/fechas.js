console.log('asdasd');
var fecha = new Date();
//los meses empiezan en 0
var mes = fecha.getMonth() + 1;
console.log('Dia', fecha.getDay());
console.log('Mes', mes);
console.log('Año', fecha.getFullYear());

//timestamp
console.log("Hola:", Date.now());
