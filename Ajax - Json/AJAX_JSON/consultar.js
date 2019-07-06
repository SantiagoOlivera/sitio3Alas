usuario.addEventListener(
    "blur",
    function (){
        console.log("Test", usuario.value);
        var user = usuario.value;
        var x = new XMLHttpRequest();
        x.onreadystatechange = function (){
                console.log(x.status);
                if(x.status === 200 && x.readyState === 4){
                    respuesta.innerHTML = x.responseText;
                }
        }
        

        //x.open("GET", "consultar.php", true); // tira ERROR porque le falta el parametro --Ver Navegador/Network
        x.open("GET", "consultar.php?user=" + user, true);
        x.send(); 
        
});
