<?php
include_once 'responses/ApiExcelDownload.php';
include_once 'Model/RetirosModel.php';

class ApiRetirosController extends ApiController
{

    public function __construct()
    {
        parent::__construct();  
        $this->model = new RetirosModel();
        $this->excelView = new APIExcelDownload();

    }

    public function obtenerRetiros()
    {
        $retiros = $this->model->getRetiros();
        $this->view->response($retiros, 200);
    }


    public function generarReporte()
    {
        $retiros = $this->model->getRetiros();

        $retirosHeader=["<b>Nombre</b>","<b>Apellido</b>","<b>Direccion</b>","<b>Telefono</b>","<b>Franja Horaria</b>", "<b>Volumen de Materiales</b>"];
        $retirosArray = [$retirosHeader];
        foreach($retiros as $retiro )
        {
            array_push( $retirosArray,[$retiro->nombre,$retiro->apellido,$retiro->direccion,$retiro->telefono,$retiro->franja_horaria,$retiro->volumen_materiales]);
        }
    
        $this->excelView->response($retirosArray, 200);
    }

    public function insertarRetiro()
    {
        $random = rand(1, 10);

        if ($random <= 8) {
            $contenido = $this->inputData;
            $success = $this->model->insertRetiro($contenido->nombre, $contenido->apellido, $contenido->direccion, $contenido->telefono, $contenido->franja_horaria, $contenido->volumen_materiales, $contenido->foto, 0);
            if ($success) {
                $msg = "El Retiro fue agregado con exito";
                $this->view->response($msg, 200);
            } else {
                $this->view->response("El Retiro no se pudo agregar", 500);
            }
        } else {
            $this->view->response("La distancia supera los 6km", 200);
        }
    }

    public function getRetiroById($params = null)
    {
        if (isset($params[':ID'])) {
            $id = $params[':ID'];
            $retiro = $this->model->getRetiroById($id);

            if (!empty($retiro)) {
                $this->view->response($retiro, 200);
            } else {
                $this->view->response("No existen retiros para el id = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }

    public function deleteRetiroById($params = null)
    {
        if (isset($params[':ID'])) {
            $id = $params[':ID'];
            $retiro = $this->model->deleteRetiroById($id);
            
            if (!empty($retiro)) {
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
