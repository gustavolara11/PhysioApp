<?
include_once 'connection.php';

class Patient {
    protected $name;
    protected $birthday;
    protected $adress;
    protected $city;
    protected $phone;
    protected $status;

    public function __construct($name, $birthday, $adress, $city, $phone) {
        $this->setName($name);
        $this->setBirthday($birthday);
        $this->setAdress($adress);
        $this->setCity($city);
        $this->setPhone($phone);
        $this->setStatus(1);
    }
    
    public function create(){
        $con = new Connection;
        $sql = "INSERT INTO `patients`(`id`, `name`, `birthday`, `adress`, `city`, `phone`, `status`) VALUES (NULL,'".$this->getName()."','".$this->getBirthday()."','".$this->getAdress()."','".$this->getCity()."','".$this->getPhone()."','".$this->getStatus()."');";
        $query = mysqli_query($con->getCon(), $sql);
    }
    public function read(){
        $con = new Connection;
        $sql = "SELECT * FROM `patients` WHERE `status` = '1' ORDER BY `name`";
        $query = mysqli_query($con->getCon(), $sql);
        return mysqli_fetch_all($query, MYSQLI_ASSOC);
    }
    public function update($id, $name, $birthday, $adress, $city, $phone){
        $con = new Connection;
        $sql = "UPDATE `patients` SET `name` = '$name', `birthday` = '$birthday', `adress` = '$adress', `city` = '$city', `phone` = '$phone' WHERE `id` = $id";
        $query = mysqli_query($con->getCon(), $sql);
    }
    public function delete($id){
        $con = new Connection;
        $sql = "UPDATE `patients` SET `status` = '0' WHERE `id` = ".$id."";
        $query = mysqli_query($con->getCon(), $sql);
    }
    public function search($id){
        $con = new Connection;
        $sql = "SELECT * FROM `patients` WHERE `name` LIKE '%".$id."%' AND `status` = '1'";
        $query = mysqli_query($con->getCon(), $sql);
        return mysqli_fetch_all($query, MYSQLI_ASSOC);
    }
    public function searchById($id){
        $con = new Connection;
        $sql = "SELECT * FROM `patients` WHERE `id` LIKE ".$id."";
        $query = mysqli_query($con->getCon(), $sql);
        return mysqli_fetch_all($query, MYSQLI_ASSOC);
    }
        
    public function setName($name){
        $this->name = $name;
    }
    public function getName(){
        return $this->name;
    }
    public function setBirthday($birthday){
        $this->birthday = $birthday;
    }
    public function getBirthday(){
        return $this->birthday;
    }
    public function setAdress($adress){
        $this->adress = $adress;
    }
    public function getAdress(){
        return $this->adress;
    }
    public function setCity($city){
        $this->city = $city;
    }
    public function getCity(){
        return $this->city;
    }
    public function setPhone($phone){
        $this->phone = $phone;
    }
    public function getPhone(){
        return $this->phone;
    }
    public function setStatus($status){
        $this->status = $status;
    }
    public function getStatus(){
        return $this->status;
    }
}
?>