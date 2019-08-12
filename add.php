
<?php
   include('db.php');

     if(isset($_POST['nombre'])){

        $nombre = $_POST['nombre'];
        $comentario = $_POST['comentario'];
        $query = "INSERT INTO app(nombre,comentario) VALUES('$nombre', '$comentario')";
        $resultado = mysqli_query($connec,$query);
        if(!$resultado){
          
            die('error connection');

        }

        echo 'agregado';
      
       
        
       
     }




?>