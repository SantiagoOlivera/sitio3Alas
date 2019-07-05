//console.log("HOla");
/* $ es igual a excribir Jquery */ 

//seleccionar elementos con esta clase
$('.violeta').css('color','violet');

/*

//agrega las propiedades css en el archivo html
$('#parrafo').css({
    'color':'yellow',
    'background-color':'black',
});
*/

var parrafo = $('#parrafo');
// addClass / removeClass / toggleClass
parrafo.addClass('azul');

// Eventos con Jquery
$('h1').click( function (){
    $(this).toggleClass('azul'); //this es para indicar el elemento que activo el evento
    
});