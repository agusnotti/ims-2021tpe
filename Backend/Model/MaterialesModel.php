<?php
require_once "Model.php";
class MaterialesModel extends Model{


    function getMateriales(){
        $sentencia = $this->db->prepare("SELECT * FROM materiales");
        $sentencia->execute();
        return $sentencia->fetchAll(PDO::FETCH_OBJ);
    }

    function insertMaterial($nombre,$entrega,$descripcion,$foto){
        $sentencia = $this->db->prepare("INSERT INTO materiales(nombre,entrega,descripcion,foto) VALUES(?,?,?,?)");
        $sentencia->execute(array($nombre,$entrega,$descripcion,$foto));
        return $this->db->lastInsertId();
    }


    function getMaterialByID($id){
        $sentencia = $this->db->prepare("SELECT * FROM materiales WHERE id=?");
        $sentencia->execute(array($id));
        return $sentencia->fetch(PDO::FETCH_OBJ);
    }

    function deleteMaterialById($id){
        $sentencia = $this->db->prepare('DELETE FROM materiales WHERE id=?');
        $sentencia->execute(array($id));
        return $sentencia->rowCount();
    }

}