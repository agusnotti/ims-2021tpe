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
        $this->data = file_get_contents('php://input');
    }

    public function getData()
    {
        return json_decode($this->data);
    }

    public function obtenerMateriales()
    {
        $materiales = $this->model->getMateriales();
        $this->view->response($materiales, 200);
        //SI NO HAY COMENTARIOS
    }

    public function insertarMaterial()
    {
        $contenido = $this->getData();
        $success = $this->model->insertMaterial($contenido->nombre, $contenido->entrega, $contenido->descripcion, $contenido->foto);
        if ($success) {
            $msg = "El Material fue agregado con exito";
            $this->view->response($msg, 200);
        } else {
            $this->view->response("El Material no se pudo agregar", 500);
        }
    }

    public function getMaterialById($params = null)
    {
        if (isset($params[':ID'])) {
            $id = $params[':ID'];
            $material = $this->model->getMaterialById($id);

            if (!empty($material)) {
                $this->view->response($material, 200);
            } else {
                $this->view->response("No existen Material para el id = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }

    public function deleteMaterialById($params = null)
    {
        if (isset($params[':ID'])) {
            $id = $params[':ID'];
            $material = $this->model->deleteMaterialById($id);

            if (!empty($material)) {
                $msg = "El Material con id: $id fue eliminado con éxito";
                $this->view->response($msg, 200);
            } else {
                $this->view->response("No existen Materiales para el id = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }


    public function editMaterialById($params = null)
    {
        if (isset($params[':ID'])) {
            $id = $params[':ID'];
            $material = $this->model->getMaterialById($id);
            if (!empty($material)) {
                $contenido = $this->getData();
                $success = $this->model->modifyMaterial($id,$contenido->nombre, $contenido->entrega, $contenido->descripcion, $contenido->foto);
                if ($success==0) {
                    $msg = "El Material fue modificado con exito";
                    $this->view->response($msg, 200);
                } else {
                    $this->view->response("El Material no se pudo modificar", 400);
                }
               
            } else {
                $this->view->response("No existen Materiales para el id = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }
}
