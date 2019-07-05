//console.log("asd");

$('#ocultar').click(function(){
    //por defecto la velocidad es de 400
    $('#caja').slideUp(
        6020, 
        function(){
            alert('Termine');
    })
});
$('#mostrar').click(function(){
    $('#caja').slideDown();
});

// fadeIn / fadeOut

$('#aparecer').click(function(){
    $('#caja').fadeIn(2400);
});
$('#desaparecer').click(function(){
    $('#caja').fadeOut();
});