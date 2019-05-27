menu.addEventListener(
    // va a escuchar el evento click
    "click", 
    function(){
        console.log("Hiciste click");
        var selectedItem = document.getElementsByClassName("item");
        var listItems = document.getElementsByClassName("item");

        for(var i=0; i<listItems.length; i++){
            console.log("item" + listItems[i].textContent);
            
        }
    }
    
);