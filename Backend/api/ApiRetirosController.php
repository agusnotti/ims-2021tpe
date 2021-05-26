<?php

include_once 'ApiView.php';
include_once 'Model/RetirosModel.php';

class ApiRetirosController{

    private $model;
    private $view;
    private $data;

    function __construct(){
        $this->model = new RetirosModel();
        $this->view = new APIView();
        $this->data = file_get_contents('php://input');
    }

    function getData(){
        return json_decode($this->data);
    }

    public function ObtenerRetiros(){
            $retiros = $this->model->getRetiros();
                $this->view->response($retiros, 200);
                //SI NO HAY COMENTARIOS
    }

    public function InsertarRetiro(){
        $random = rand(1,10);

        if($random <= 8){
            $contenido = $this->getData();
            $success = $this->model->insertRetiro($contenido->nombre, $contenido->apellido, $contenido->direccion, $contenido->telefono,$contenido->franja_horaria,$contenido->volumen_materiales,$contenido->foto,0);
            if($success){
                $msg = "El Retiro fue agregado con exito";
                $this->view->response($msg, 200);
            } else {
                $this->view->response("El Retiro no se pudo agregar", 500);
            }
        }else {
            $this->view->response("La distancia supera los 6km",200);
        }
    }

    public function getRetiroById($params = null){
        if(isset($params[':ID'])){
            $id = $params[':ID'];
            $retiro = $this->model->getRetiroById($id);

            if(!empty($retiro)){
                $this->view->response($retiro, 200);
            } else {
                $this->view->response("No existen retiros para el id = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }

    public function deleteRetiroById($params = null){
        if(isset($params[':ID'])){
            $id = $params[':ID'];
            $retiro = $this->model->deleteRetiroById($id);
            
            if(!empty($retiro)){
                $msg = "El retiro con id: $id fue eliminado con éxito";
                $this->view->response($msg, 200);
            } else {
                $this->view->response("No existen retiros para el id = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }




}
