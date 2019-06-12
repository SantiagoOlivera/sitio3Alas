<?php
    /* no toma laa carpeta htdocs
    se debe ejecutar desde localhost/carpeta/archivo.php */
    
    //variables.php
    $nombre = "Santiago";
    $edad = 5;

    echo $nombre;
    echo " tiene ";
    echo $edad;

    
    echo "<br>Hola Mundo!<br>";//se puede colocar html dentro del php
    echo "Todo Ok";

    echo "<br>";
    echo "$nombre tiene $edad";//Otra manera de  escribir el resultado
    echo "<br>";
    echo '$nombre tiene $edad'; //Muestra codigo literal con comillas simples
    echo "<br>";
    echo $nombre . " tiene " . $edad;
    //Condicional
    echo "<br>";
    if($edad >= 18){
        echo $nombre . " es mayor de edad";
    }else{
        echo $nombre . " es menor de edad";
    }
    ?>
    <h1>Hola HTML</h1>
<?php
    echo "Maravilloso PHP";
    echo "Como andas ?"; // la ultima linea no necesita ";" (punto y coma)


 ?>