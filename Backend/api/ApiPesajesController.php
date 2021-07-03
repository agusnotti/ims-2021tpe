<?php

include_once 'Model/PesajesModel.php';

class ApiPesajesController extends ApiController
{
    public function __construct()
    {
        parent::__construct();  
        $this->model = new PesajesModel();
        $this->excelView = new APIExcelDownload();


    }
    
    public function obtenerPesajes()
    {
        $retiros = $this->model->getPesajes();
        $this->view->response($retiros, 200);
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



    public function obtenerAcopios()
    {
        $acopios = $this->model->getPesajesPorCartoneros();
        $this->view->response($acopios, 200);
    }

    public function obtenerAcopio($params=null)
    {
        if (isset($params[':ID'])) {
            $id = $params[':ID'];

            $acopio = $this->model->getPesajesDeCartonero($id);

            if (!empty($acopio)) {
                $this->view->response($acopio, 200);
            } else {
                $this->view->response("No existen acopios para el cartonero = $id", 404);
            }
        } else {
            $this->view->response("No estaba seteado el id", 500);
        }
    }

    public function generarReporteAcopios()
    {
        $acopios = $this->model->getPesajesPorCartoneros();

        $acopiosHeader=["<b>DNI</b>","<b>Apellido y nombres</b>","<b>Material</b>","<b>Kilos</b>"];
        $acopiosArray = [$acopiosHeader];
        foreach($acopios as $acopio )
        {
            array_push( $acopiosArray,[$acopio->dni,$acopio->apellido.", ".$acopio->nombre,$acopio->material,$acopio->total]);
        }
    
        $this->excelView->response($acopiosArray, 200);
    }
}
