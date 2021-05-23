<?php
include_once 'api/ApiRetirosController.php';
include_once 'Model/RetirosModel.php';
include_once 'RouterClass.php';


$r = new Router();

$r->addRoute('retiros', 'POST', 'ApiRetirosController', 'InsertarRetiro');
$r->addRoute('retiros', 'GET', 'ApiRetirosController', 'ObtenerRetiros');
$r->addRoute('retiros/:ID', 'GET', 'ApiRetirosController', 'getRetiroById');
$r->addRoute('retiros/:ID', 'DELETE', 'ApiRetirosController', 'deleteRetiroById');

//run
$r->route($_GET['resource'], $_SERVER['REQUEST_METHOD']);
