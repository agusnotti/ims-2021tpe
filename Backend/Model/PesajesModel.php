<?php
require_once "Model.php";
class PesajesModel extends Model{

    function insertPesaje($material,$kilos,$cartonero){
        $sentencia = $this->db->prepare("INSERT INTO pesajes(id_material,kilos,id_cartonero) VALUES(?,?,?)");
        $sentencia->execute(array($material,$kilos,$cartonero));
        return $this->db->lastInsertId();
    }
}