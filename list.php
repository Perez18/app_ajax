<?php

   include('db.php');
  

   $query = "SELECT * FROM app";
   $resultado = mysqli_query($connec,$query);
     
   if(!$resultado){

   die('error'.mysqli_error($connec));

   }

    $json=array();      
     while($row = mysqli_fetch_array($resultado)){

     $json[]=array(   
            'nombre' => $row['nombre'],  
            'comentario' => $row['comentario'],
            'id' => $row['id']
 
     );
   }
     

     $jsonstring = json_encode($json);

      echo $jsonstring;
      

?>