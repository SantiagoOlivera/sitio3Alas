<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="buscar.css">
    <title>Document</title>
</head>
<body>
    
<?php
    // pregunta si se paso por el formulario buscar.php
    if(isset($_GET['q']) === true){
        $query = $_GET['q'];
    }else{
        $query = "";
    }
    echo $query;
    echo "<br>";

    include("conexion.php");
    
    $b = "SELECT * 
          FROM libros
          WHERE
          titulo LIKE '%$query%'
          OR
          autor LIKE '%$query%'
          ";
    $b_ej = mysqli_query(
            $conexion
            ,$b
    );
    


    if($b_ej === false){
        echo "<br>";
        echo "Todo mal";
    }else{
        echo "<br>";
        echo "Todo bien";
        $cant = mysqli_num_rows($b_ej);
        if($cant===0){
            echo "<br>";
            echo "No tengo libros por ese criterio";
        }else{
            echo "<br>";
            echo "Tengo " . $cant . " libros por el criterio " . $query;


            //CREAR UNA TABLA
            ?>
            <table>
                <!-- cabecera -->
                <!-- fuera del bucle -->
                <tr>
                    <td>Id Libro</td>
                    <td>Titulo</td>
                    <td>Autor</td>
                    <td>Precio</td>
                </tr>
                
            <?php
                //Hago Loop
                while(
                    $reg = mysqli_fetch_array($b_ej)
                    ){
                    echo "<tr>";
                        echo "<td>" . $reg['id_libro'] . "</td>";
                        echo "<td>" . $reg['titulo']   . "</td>";
                        echo "<td>" . $reg['autor']    . "</td>";
                        echo "<td>" . $reg['precio']   . "</td>";
                    echo "</tr>";
                }
            echo "</table>";
            
            //----- DANGER ZONE -----
        }
    }
?>

</body>

</html>