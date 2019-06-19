<?php
    //insertar.php

    // 1.Me conecto a la BD
    // 2.Creo la query
    // 3.Ejecuto la query
    // 4.Verifico si funcionó


    // 1.Me conecto a la BD
    include("conexion.php"); // coloca el codigo de conexion.php en este archivo
    // 2.Creo la query
    $insertar = "Insert into libros
                 Values(
                    NULL
                    ,'Harry Potter 1'
                    ,'Rowling'
                    ,3454
                 )";
    // 3.Ejecuto la query
    $insertar_ej = mysqli_query(
                $conexion
                ,$insertar
    );

    // 4.Verifico si funcionó
    if($insertar_ej === TRUE){
        echo "Registro Insertado!";
    }else{
        echo "Error, Ver SQL" . $insertar;
    }
    

?>