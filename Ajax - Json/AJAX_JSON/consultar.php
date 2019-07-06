<?php
    //consultar.php
    // 0.Conseguir el user 
    $user = $_GET['user'];
    // 1.Conexion
    include('conexion.php');
    //query
    $c = "SELECT usuario 
         FROM usuarios 
         WHERE usuario = '$user'
         ";
    // 3.Ejecutar query
    $c_ej = mysqli_query(
        $conexion,
        $c
    );
    // 4.Preguntar cuantos resultados hay
    if(mysqli_num_rows($c_ej) === 0){
        //echo <img src="happy.jpg" alt="el usuario esta disponible">
        echo "Yay! que buen usuario";
    }else{
        //echo <img src="sad.jpg" alt="el usuario no esta disponible">
        echo "Oh, no ese usuario ya está ocupado";
    }
    
    //Ver Mean Girls
    //Open Wheather Map
    //OMDB
    //Node.Js
?>




