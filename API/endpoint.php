<?php
require_once "classes/Patient.php";

// Form data
 if($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['name'])){
    $name = $_POST['name'] ?? ' ';
    $birthday = $_POST['birthday'] ?? ' ';
    $adress = $_POST['adress'] ?? ' ';
    $city = $_POST['city'] ?? ' ';
    $phone = $_POST['phone'] ?? ' ';
 
    $newPatient = new Patient($name, $birthday, $adress, $city, $phone);
    $newPatient->create();
    
    exit;
 }
 
 // JSON data
   $data = file_get_contents('php://input');
   $jsonData = json_decode($data, true);
   if (!empty($jsonData)) {
      $operation = $jsonData['operation'];
      $name = $jsonData['name'] ?? ' ';
         if(!empty($name)){
            $newPatient = new Patient($name, ' ', ' ', ' ', ' ');
            $ret = $newPatient->$operation($name);
            echo json_encode($ret);
      
         }else{
      $newPatient = new Patient(' ', ' ', ' ', ' ', ' ');
      $ret = $newPatient->$operation();
      echo json_encode($ret);
      
      }
   }else{
      echo json_encode('Erro ao receber dados.');
      exit;
   };
 ?>