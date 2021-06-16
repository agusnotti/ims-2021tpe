<?php
require 'vendor/autoload.php';
include_once 'RouterClass.php';
foreach (glob("api/*.php") as $filename) {
    include $filename;
}



header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
if($_SERVER["REQUEST_METHOD"] == "OPTIONS") exit();

$r = new Router();

$r->addRoute('retiros', 'POST', 'ApiRetirosController', 'insertarRetiro');
$r->addRoute('retiros', 'GET', 'ApiRetirosController', 'obtenerRetiros');
$r->addRoute('retiros/reporte', 'GET', 'ApiRetirosController', 'generarReporte');
$r->addRoute('retiros/:ID', 'GET', 'ApiRetirosController', 'getRetiroById');
$r->addRoute('retiros/:ID', 'DELETE', 'ApiRetirosController', 'deleteRetiroById');


$r->addRoute('materiales/:ID', 'DELETE', 'ApiMaterialesController', 'deleteMaterialById');

//run
$r->route($_GET['resource'], $_SERVER['REQUEST_METHOD']);
