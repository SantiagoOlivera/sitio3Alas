
<?php
    $edad = 2;
    if($edad >= 18){
        $clase = "ok";
    }else{
        $clase = "no";
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="condicional.css" rel="stylesheet">
    <title>Document</title>
</head>
<body class="<?php echo $clase /* ver codigo fuente estan los errores de PHP */ ?>">
        <h1>PHP y HTML</h1>
        <p>Best friends ever.</p>   
        <?php
            echo "Resultado: " . $clase;
            echo "<br>";
            
            $dia = Date("N") - 1;

            switch($dia){
                case 1: echo "Es Lunes";
                    break;
                case 2: echo "Es Martes";
                    break;
                case 3: echo "Es Miercoles";
                    break;
                case 4: echo "Es Jueves";
                    break;
                case 5: echo "Es Viernes";
                    break;
                case 6: echo "Es Sabado";
                    break;
                case 7: echo "Es Domingo";
                    break;
                default: echo "Ese no es un dia";
                    break;
            }

            echo "<br>Fecha de Hoy:";
            $hoy = Date("Y/m/d H:i:s");
            echo $hoy;
            //obtine numero de dia del año
            $dia = date("z");
            echo "<br>" . $dia;

            //definicion de vectores PHP

            //Opcion 1
            $edades = array(25,83,10,9);
            //Opcion 2
            $nombres[0] = "Santiago";
            $nombres[1] = "Sabrina";
            $nombres[2] = "Pepe";
            $nombres[3] = "José";
            //Opcion 3
            echo "<br> La segunda edad es: " . $edades[1];
            echo "<br>El cuarto nombre es " . $nombres[3];
            echo "<hr>";
            
            //Bucle foreach
            foreach($nombres as $valor){
                echo "El nombre es: " . $valor;
                echo "<br>"; 
            }
            //Array asociativo
            //trabaja los arrays no con indices numericos sino con valores "string"
            $libro = array(
                "id_libro" => 1,
                "titulo" => "HP",
                "autor" => "Rowling",
                "precio" => 350
            );

            $peliculas["id_pelicula"] = 3;
            $peliculas["titulo"] = "La Niebla";
            $peliculas["director"] = "Sr. X";
            $peliculas["anio"] = 2010;

            echo "El titulo del libro es " . $libro["titulo"];
            echo "<br>";
            echo "El año de la pelicula es " . $peliculas["anio"];

            //Igualdades
            // =  Asigna
            // == Comparar(por contenido de variable)
            //=== Comparacion (por contenio y tipo de dato)

            $nombre = "Pepe";
            if($nombre = "Martin"){
                echo "Es positivo";
            }else{
                echo "Es negativo";
            }
            
            $num = 45;
            if($num === "45"){
                echo "Es positivo";
            }else{
                echo "Es negativo";
            }
        ?>

        
</body>
</html>


