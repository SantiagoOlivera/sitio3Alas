titulo.addEventListener(
    //arrow function => es lo mismo que escribir function solo que mas cheto
    "click", (event) => {
        console.log("Test");
        event.target.style.backgroundColor = "green";
    }
);