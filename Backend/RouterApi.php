<?php
include_once 'api/ApiRetirosController.php';
include_once 'Model/RetirosModel.php';
include_once 'RouterClass.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
if($_SERVER["REQUEST_METHOD"] == "OPTIONS") exit();

$r = new Router();

$r->addRoute('retiros', 'POST', 'ApiRetirosController', 'InsertarRetiro');
$r->addRoute('retiros', 'GET', 'ApiRetirosController', 'ObtenerRetiros');
$r->addRoute('retiros/:ID', 'GET', 'ApiRetirosController', 'getRetiroById');
$r->addRoute('retiros/:ID', 'DELETE', 'ApiRetirosController', 'deleteRetiroById');

//run
$r->route($_GET['resource'], $_SERVER['REQUEST_METHOD']);
