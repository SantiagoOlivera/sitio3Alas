//fetch.js
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=897f1e77')
    .then((respuesta) => {
        console.log("Ok!", respuesta);
        //devuelvo la respuesta

        return respuesta.json();
    })
    .then((mijson) => {
        console.log("Ok n.2 ");
        console.log(mijson);
        titulo.innerHTML =mijson.Title;
        //poster.setAttribute("src", mijson.Poster);
        poster.src = mijson.Poster;
    })
    .catch(() => {
        console.log("Error");
    });