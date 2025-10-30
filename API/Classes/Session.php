<?
include_once 'connection.php';

class Session {
    protected $id_patient;
    protected $date;
    protected $hour;

    public function __construct($id, $date, $hour) {
        $this->setId_patient($id);
        $this->setDate($date);
        $this->setHour($hour);
    }

    public function create(){
        $con = new Connection;
        $sql ="INSERT INTO `sessions`(`id`, `id_patient`, `date`, `hour`) VALUES (NULL,'".$this->getId_patient()."','".$this->getDate()."','".$this->getHour()."');";
        $query = mysqli_query($con->getCon(), $sql);
    }
    public function read($id){
        $con = new Connection;
        $sql = "SELECT * FROM `sessions` WHERE `id_patient` LIKE '%".$id."%'";
        $query = mysqli_query($con->getCon(), $sql);
        return mysqli_fetch_all($query, MYSQLI_ASSOC);
    }
    public function delete($id){
        $con = new Connection;
        $sql ="DELETE FROM `sessions` WHERE `id` = ".$id."";
        $query = mysqli_query($con->getCon(), $sql);
    }
    public function setId_patient($id_patient){
        $this->id_patient = $id_patient;
    }
    public function getId_patient(){
        return $this->id_patient;
    }
    public function setDate($date){
        $this->date = $date;
    }
    public function getDate(){
        return $this->date;
    }
    public function setHour($hour){
        $this->hour = $hour;
    }
    public function getHour(){
        return $this->hour;
    }
}


?>