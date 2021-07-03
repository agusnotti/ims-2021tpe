<?php
require_once "Model.php";
class PesajesModel extends Model{

    function insertPesaje($material,$kilos,$cartonero){
        $sentencia = $this->db->prepare("INSERT INTO pesajes(id_material,kilos,id_cartonero) VALUES(?,?,?)");
        $sentencia->execute(array($material,$kilos,$cartonero));
        return $this->db->lastInsertId();
    }



    function getPesajesPorCartoneros(){
        
        $query = $this->db->prepare("SELECT id_cartonero,cartoneros.nombre,cartoneros.apellido,cartoneros.dni, id_material, materiales.nombre as material,sum(kilos) as total FROM pesajes
        inner join cartoneros on pesajes.id_cartonero = cartoneros.id
        inner join materiales  on pesajes.id_material = materiales.id
        where id_cartonero != 0 GROUP by id_cartonero,id_material");
        $query->execute();
        return $query->fetchAll(PDO::FETCH_OBJ);

    }

    function getPesajesDeCartonero($id){

        $query = $this->db->prepare("SELECT id_cartonero,cartoneros.nombre,cartoneros.apellido,cartoneros.dni, id_material, materiales.nombre as material,sum(kilos) as total FROM pesajes
        inner join cartoneros on pesajes.id_cartonero = cartoneros.id
        inner join materiales  on pesajes.id_material = materiales.id
        where  id_cartonero=? GROUP by id_cartonero,id_material");
        $query->execute(array($id));
        return $query->fetch(PDO::FETCH_OBJ);
    }
}