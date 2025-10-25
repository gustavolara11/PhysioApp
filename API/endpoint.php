<?php
require_once "classes/Patient.php";

 // JSON data
   $data = file_get_contents('php://input');
   $jsonData = json_decode($data, true);
   if (!empty($jsonData)) {
      $operation = $jsonData['operation'];
      $id = $jsonData['id'] ?? NULL;
      $name = $jsonData['name'] ?? NULL;
      $birthday = $jsonData['birthday'] ?? NULL;
      $adress = $jsonData['adress'] ?? NULL;
      $city = $jsonData['city'] ?? NULL;
      $phone = $jsonData['phone'] ?? NULL;

      switch ($operation) { 
      case 'create': // criar a funcao do Js de create
         $newPatient = new Patient($name, $birthday, $adress, $city, $phone);
         $newPatient->create();
         break;
      case 'read':
         $newPatient = new Patient($name, $birthday, $adress, $city, $phone);
         $data = $newPatient->read();
         echo json_encode($data);
         break;
      case 'update':
         $newPatient = new Patient($name, $birthday, $adress, $city, $phone);
         $newPatient->update($id, $name, $birthday, $adress, $city, $phone);
         break;
      case 'delete':
         $newPatient = new Patient($name, $birthday, $adress, $city, $phone);
         $newPatient->delete($id);
         break;
      default:
         echo "Não foi possível realizar seu pedido.";
         break;
   }
        
   }else{
      echo json_encode('Erro ao receber dados.');
      exit;
   };
?>