<?php

require_once "Model.php";

class CartonerosModel extends Model{


    function getCartoneros(){
        $sentencia = $this->db->prepare("SELECT * FROM cartoneros");
        $sentencia->execute();
        return $sentencia->fetchAll(PDO::FETCH_OBJ);
    }

    function insertCartonero($nombre,$apellido,$dni,$direccion,$dob,$vehiculo,$capacidad){
        $sentencia = $this->db->prepare("INSERT INTO cartoneros(nombre,apellido,dni,direccion,dob,vehiculo,capacidad) VALUES(?,?,?,?,?,?,?)");
        $sentencia->execute(array($nombre,$apellido,$dni,$direccion,$dob,$vehiculo,$capacidad));
        return $this->db->lastInsertId();
    }


    function getCartoneroById($id){
        $sentencia = $this->db->prepare('SELECT * FROM cartoneros WHERE id=?');
        $sentencia->execute(array($id));
        return $sentencia->fetch(PDO::FETCH_OBJ);
    }

    function deleteCartoneroById($id){
        $sentencia = $this->db->prepare('DELETE FROM cartoneros WHERE id=?');
        $sentencia->execute(array($id));
        return $sentencia->rowCount();
    }

    function modifyCartonero($id,$nombre,$apellido,$dni,$direccion,$dob,$vehiculo,$capacidad){
        $sentencia = $this->db->prepare("UPDATE cartoneros SET nombre=?, apellido=?, dni=?, direccion=?, dob=?, vehiculo=?, capacidad=? WHERE id=?");
        $sentencia->execute(array($nombre,$apellido,$dni,$direccion,$dob,$vehiculo,$capacidad, $id));
        return $sentencia->rowCount();
    }
}