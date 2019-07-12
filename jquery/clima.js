var x = new XMLHttpRequest();

//readystatechange
x.addEventListener(
    "readystatechange",
    () => {
        console.log(x.status);
        console.log(x.readyState);
        if(x.status === 200 && x.readyState === 4){
            console.log("Termino y salio todo bien");
            //console.log(x.response)
            var respuesta = JSON.parse(x.response);
            ciudad.innerHTML = respuesta.name;
            console.log( respuesta.main.temp);
            temperatura.innerHTML = respuesta.main.temp;


        }
    }
);

x.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=a9ed1b85f967bcc5560dba7266ad931a&units=metric",true);
x.send();

