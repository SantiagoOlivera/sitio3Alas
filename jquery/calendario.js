//console.log('dasd');

$('#fecha').datepicker({
    /* 'numberOfMonths':3, */
    'numberOfMonths':[2,3],
    'changeYear': true,
});

/* ESPAÑOL */
		/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
		jQuery(function($){
            $.datepicker.regional['es'] = {
               closeText: 'Cerrar',
               prevText: '<Ant',
               nextText: 'Sig>',
               currentText: 'Hoy',
               monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
               monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
               dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
               dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
               dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
               weekHeader: 'Sm',
               dateFormat: 'dd/mm/yy',
               firstDay: 1,
               isRTL: false,
               showMonthAfterYear: false,
               yearSuffix: ''};
            $.datepicker.setDefaults($.datepicker.regional['es']);
         }); 