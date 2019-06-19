<?php
    //consula.php

    // 1.Conectarme a la BD
    // 2.Genero la query
    // 3.Ejecuto la query
    // 4.Preguntar si funcionó

     // 1.Conectarme a la BD
     include("conexion.php");
     // 2.Genero la query
     $select ="select * 
               from libros 
               where precio > 500
               order by autor,titulo";
    // 3.Ejecuto la query
    $select_ej = mysqli_query(
        $conexion
        ,$select
    );
    if($select_ej === false){
        //si no devolvio false el codigo esta ok
        echo "Error, Ver SQL";
    }else{
        echo "Funcionó, vas bien";


        $cant = mysqli_num_rows($select_ej);
        
        if($cant === 0){
            echo "<br>";
            echo "No hay libros por ese criterio";
        }else{
            echo "<br>";
            echo "Tenemos " . $cant . " registros";
            //Aca mostramos los resultados
            //Transforma el resultado del select en un array asociativo para que podamos mostrarlo
            
            //El array tiene como indice el nombre de la columna
            while(
                $reg = mysqli_fetch_array($select_ej)
            ){
                echo "<br>";
                echo $reg['titulo'];
                echo " de ";
                echo $reg['autor'];
            }


        //------ DANGER ZONE ------
        }

    }
        
    // 4.Preguntar si funcionó
?>