<?php

include_once 'Model/CartonerosModel.php';

class ApiCartonerosController extends ApiController
{

    public function __construct()
    {
        parent::__construct();  
        $this->model = new CartonerosModel();

    }


    public function obtenerCartoneros()
    {
        $cartoneros = $this->model->getCartoneros();
        $this->view->response($cartoneros, 200);
    }

    public function insertarCartonero()
    {
        $contenido = $this->inputData;
        $success = $this->model->insertCartonero($contenido->nombre, $contenido->apellido, $contenido->dni, $contenido->direccion, $contenido->dob, $contenido->vehiculo, $contenido->capacidad);
        if ($success) {
            $msg = "El Cartonero fue agregado con exito";
            $this->view->response($msg, 200);
        } else {
            $this->view->response("El Cartonero no se pudo agregar", 500);
        }
    }

    public function getCartoneroById($params = null)
    {
        if (isset($params[':ID'])) {
            $id = $params[':ID'];
            $cartonero = $this->model->getCartoneroById($id);

            if (!empty($cartonero)) {
                $this->view->response($cartonero, 200);
            } else {
                $this->view->response("No existe Cartonero para el id = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }

    
    public function deleteCartoneroById($params = null)
    {
        if (isset($params[':ID'])) {
            $id = $params[':ID'];
            $cartonero = $this->model->deleteCartoneroById($id);

            if (!empty($cartonero)) {
                $msg = "El Cartonero con id: $id fue eliminado con éxito";
                $this->view->response($msg, 200);
            } else {
                $this->view->response("No existe Cartonero para el id = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }


    
}