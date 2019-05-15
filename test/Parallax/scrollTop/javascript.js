$(document).ready(function () {
			
			//Cuando el usuario hace scroll
			$(".completo").scroll(function () {
				// Conseguir el scroll del usuario
				var s = $(".completo").scrollTop();
				
				//Cuando se hace scroll, la imagen se mueve la mitad que el resto del contenido.
				// Positivo o negativo (vuela)
				$(".empty").css("transform","translateY(" +  (s/2)  + "px)");
				
				// Cuando scrollea más de 160px se muestra el elemento
				if(s>160){
					$('#random').css('display','block');
				}
				
			})
		
		})