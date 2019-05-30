var listItems = document.querySelectorAll("#menu li");
listItems.forEach( 
    function(item){
        item.onclick = function(e){
            for(var i=0; i<listItems.length; i++){
                listItems[i].classList.remove("diferente");
            }
            this.classList.add("diferente");
        }
    }
);


/* 

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

*/
