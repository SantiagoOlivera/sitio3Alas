//nuevo / agregar / lista
var incompletos;
agregar.addEventListener(
    "click",
    function (){
        console.log(nuevo.value);
        //crear un li
        var nuevoLi = document.createElement("li");
        nuevoLi.classList.add('incompleto');
        //que contenga ese li con ese valor de nuevo
        nuevoLi.innerHTML = nuevo.value;
        console.log(nuevoLi);
        //agregar ese a li a las lista
        lista.appendChild(nuevoLi);

                    incompletos = document.querySelectorAll('.incompleto');
                    incompletos[incompletos.length-1].addEventListener(
                        "click",
                        function(event){
                            console.log("Aca se modifican las clases");
                            event.target.classList.add("completo");
                            event.target.classList.remove("incompleto");
                            
                        }
                    );
                    
                    /* for(var i=0; i< incompletos.length; i++){
                        console.log(incompletos[i]);
                        incompletos[i].addEventListener(
                            "click",
                            function(){
                                console.log("Aca se modifican las clases");

                            }
                        );
                    } */
    }
);

//seleccionar todos los elementos incompletos
//Todo elemento con clase .incompleto
var incompletos = document.querySelectorAll('.incompleto');

console.log(incompletos);

if(incompletos.length > 0){
    console.log(incompletos);
}

for(var i=0; i< incompletos.length; i++){
    console.log(incompletos[i]);
    incompletos[i].addEventListener(
        "click",
        function(){
            console.log("Aca se modifican las clases");


        }
    );
}
