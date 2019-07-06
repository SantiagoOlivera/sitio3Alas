console.log("Test");

traer.addEventListener(
    "click",
    function (){
        console.log("hiciste click");
        //ACA HAGO LA LLAMADA A texto.txt
        var x = new XMLHttpRequest();
        //se llama a esta propiedad cada vez que se ejecuta la la funcion
        x.onreadystatechange = function (){
            console.log("Status:", x.status);
            console.log("ReadyState:", x.readyState);
            //mostrar el contenido
            if(x.status === 200 && x.readyState === 4){
                console.log("todo ok");
                //Muestro el contenido en el archivo en el div
                // si no se muestra la modificacion del archivo, hay que eliminar cache del navegador
                // marcar el network disable cache
                mostrar.innerHTML = x.responseText
            }else{
                console.log("Tenes algun error");
            }
        }
        x.open("GET", "texto.txt", true);
        x.send();

        
    }
);

//cuando usarmos localhost usamos protocolo http

//CONCEPTOS DE SEGURIDAD INFORMATICA
//CORS
//CSP = Content Security Policy = lista de dominios que estan habilitados a ejecutarse en mi sitio

/* 
fonts:
    * .googleapis.*
images:
    *.googleanalytics.*
    *.cloudflare.*
scripts:
    *.googleanalytics.* 
    
*/
