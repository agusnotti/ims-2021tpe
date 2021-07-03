<?php

include_once 'Model/PesajesModel.php';

class ApiPesajesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();  
        $this->model = new PesajesModel();

    }



    public function insertarPesaje()
    {
        $contenido = $this->inputData;
        $success = $this->model->insertPesaje($contenido->material, $contenido->kilos, $contenido->cartonero);
        if ($success) {
            $msg = "El Pesaje fue agregado con exito";
            $this->view->response($msg, 200);
        } else {
            $this->view->response("El Pesaje no se pudo agregar", 500);
        }
    }
}
