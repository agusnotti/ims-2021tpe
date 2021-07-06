<?php
require 'vendor/autoload.php';
include_once 'RouterClass.php';
include_once 'ApiController.php';
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


$r->addRoute('materiales', 'GET', 'ApiMaterialesController', 'obtenerMateriales');
$r->addRoute('materiales/:ID', 'DELETE', 'ApiMaterialesController', 'deleteMaterialById');
$r->addRoute('materiales/:ID', 'GET', 'ApiMaterialesController', 'getMaterialById');
$r->addRoute('materiales', 'POST', 'ApiMaterialesController', 'insertarMaterial');
$r->addRoute('materiales/:ID', 'PUT', 'ApiMaterialesController', 'editMaterialById');

$r->addRoute('pesajes', 'POST', 'ApiPesajesController', 'insertarPesaje');
$r->addRoute('acopios', 'GET', 'ApiPesajesController', 'obtenerAcopios');
$r->addRoute('acopios/reporte', 'GET', 'ApiPesajesController', 'generarReporteAcopios');
$r->addRoute('acopios/:ID', 'GET', 'ApiPesajesController', 'obtenerAcopio');


$r->addRoute('login', 'POST', 'ApiUsersController', 'login');
$r->addRoute('logout', 'POST', 'ApiUsersController', 'logout');
$r->addRoute('register', 'POST', 'ApiUsersController', 'register');
$r->addRoute('session', 'GET', 'ApiUsersController', 'userSession');


$r->addRoute('cartoneros', 'GET', 'ApiCartonerosController', 'obtenerCartoneros');
$r->addRoute('cartoneros/:ID', 'GET', 'ApiCartonerosController', 'getCartoneroById');
$r->addRoute('cartoneros', 'POST', 'ApiCartonerosController', 'insertarCartonero');
$r->addRoute('cartoneros/:ID', 'DELETE', 'ApiCartonerosController', 'deleteCartoneroById');
$r->addRoute('cartoneros/:ID', 'PUT', 'ApiCartonerosController', 'editCartoneroById');

//run
$r->route($_GET['resource'], $_SERVER['REQUEST_METHOD']);
