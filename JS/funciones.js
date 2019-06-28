/* function sumar(n1, n2){
  var total = n1 + n2;
  return total;
} */


//spreed
function sumar(...numeros){
    //devuelve un array
    console.log(numeros);
    var acum = 0;
    var flag = false;
    for(var i=0; i<numeros.length; i++){
        if( Number.isInteger(numeros[i]) ){ 
            acum += numeros[i];
        }else{
            flag = true;
            console.log('Error. Solo números amego!!!');
        }
    }
    if(flag === false){
        console.log(acum);
    }
}