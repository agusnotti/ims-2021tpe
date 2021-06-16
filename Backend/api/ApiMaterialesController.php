<?php

include_once 'responses/ApiView.php';
include_once 'Model/MaterialesModel.php';

class ApiMaterialesController
{
    private $model;
    private $view;
    private $data;

    public function __construct()
    {
        $this->model = new MaterialesModel();
        $this->view = new APIView();
        $this->excelView = new APIExcelDownload();
        $this->data = file_get_contents ('php://input');
    }

    public function getData()
    {
        return json_decode($this->data);
    }

    public function obtenerMateriales()
    {
        $retiros = $this->model->getMateriales();
        $this->view->response($retiros, 200);
        //SI NO HAY COMENTARIOS
    }

    public function insertarRetiro()
    {
            $contenido = $this->getData();
            $success = $this->model->insertMaterial($contenido->nombre, $contenido->apellido, $contenido->direccion, $contenido->telefono, $contenido->franja_horaria, $contenido->volumen_materiales, $contenido->foto, 0);
            if ($success) {
                $msg = "El Retiro fue agregado con exito";
                $this->view->response($msg, 200);
            } else {
                $this->view->response("El Retiro no se pudo agregar", 500);
            }
     }

    public function getRetiroById($params = null)
    {
        if (isset($params[':ID'])) {
            $id = $params[':ID'];
            $retiro = $this->model->getMaterialById($id);

            if (!empty($retiro)) {
                $this->view->response($retiro, 200);
            } else {
                $this->view->response("No existen retiros para el id = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }

    public function deleteMaterialById($params = null)
    {
        if (isset($params[':ID'])) {
            $id = $params[':ID'];
            $retiro = $this->model->deleteMaterialById($id);
            
            if (!empty($retiro)) {
                $msg = "El Material con id: $id fue eliminado con éxito";
                $this->view->response($msg, 200);
            } else {
                $this->view->response("No existen Materiales para el id = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }
}
