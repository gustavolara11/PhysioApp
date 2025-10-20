<?php
class Connection{
    protected $host = 'db';
    protected $db = 'clinica';
    protected $user = 'user';
    protected $pass = 'password';

    public function __construct(){}

    public function getCon(){
        try {
            return $con = mysqli_connect($this->host, $this->user, $this->pass, $this->db);
            } catch (Error) {
            echo "Erro ao conectar ao Banco de Dados.";
        }
        
    }
}



?>