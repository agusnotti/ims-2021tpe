<?php

include_once 'responses/ApiView.php';
include_once 'Model/PesajesModel.php';

class ApiPesajesController
{
    private $model;
    private $view;
    private $data;

    public function __construct()
    {
        $this->model = new PesajesModel();
        $this->view = new APIView();
        $this->data = file_get_contents('php://input');
    }

    public function getData()
    {
        return json_decode($this->data);
    }

    public function insertarPesaje()
    {
        $contenido = $this->getData();
        $success = $this->model->insertPesaje($contenido->material, $contenido->kilos, $contenido->cartonero);
        if ($success) {
            $msg = "El Pesaje fue agregado con exito";
            $this->view->response($msg, 200);
        } else {
            $this->view->response("El Pesaje no se pudo agregar", 500);
        }
    }
}
