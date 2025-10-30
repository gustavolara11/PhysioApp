<?
    require_once "classes/session.php";

// JSON data
    $data = file_get_contents('php://input');
    $json_data = json_decode($data, true);
        if(!empty($json_data)){
            $operation = $json_data['operation'];
            $id = $json_data['id'];
            $date = $json_data['date'] ?? NULL;
            $hour = $json_data['hour'] ?? NULL;

            switch ($operation) {
                case 'create':
                    $newSession = new Session($id, $date, $hour);
                    $newSession->create();
                    break;
                case 'read':
                    $newSession = new Session($id, $date, $hour);
                    $data = $newSession->read($id);
                    echo json_encode($data);
                    break;
                case 'delete':
                    $newSession = new Session($id, $date, $hour);
                    $newSession->delete($id);
                    break;
                default:
                    echo "Não foi possível realizar sua solicitação.";
                    break;
            }
        }else{
            echo json_encode('Erro ao cadastrar agendamento.');
            exit;
        };
?>