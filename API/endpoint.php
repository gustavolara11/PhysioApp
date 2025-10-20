<?php
require_once "classes/connection.php";

 
 
 $newCon = new Connection();
 $testCon = $newCon->getCon();
 echo "Cadastrado";
 if($testCon){
    echo "banco de dados conectado com sucesso.";
 }
 
 
 
 ?>