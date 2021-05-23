<?php
require_once "Model.php";
class RetirosModel extends Model{


    function getRetiros(){
        $sentencia = $this->db->prepare("SELECT * FROM peticion_retiros");
        $sentencia->execute();
        return $sentencia->fetchAll(PDO::FETCH_OBJ);
    }

    function insertRetiro($nombre,$apellido,$direccion,$telefono,$franja_horaria,$volumen_materiales,$foto = null,$estado){
        $sentencia = $this->db->prepare("INSERT INTO peticion_retiros(nombre,apellido,direccion,telefono,franja_horaria,volumen_materiales,foto,estado) VALUES(?,?,?,?,?,?,?,?)");
        $sentencia->execute(array($nombre,$apellido,$direccion,$telefono,$franja_horaria,$volumen_materiales,$foto,$estado));
        return $this->db->lastInsertId();
    }


    function getRetiroById($id_retiro){
        $sentencia = $this->db->prepare("SELECT * FROM peticion_retiros WHERE id=?");
        $sentencia->execute(array($id_retiro));

        return $sentencia->fetch(PDO::FETCH_OBJ);
    }

    function deleteRetiroById($id_retiro){
        $sentencia = $this->db->prepare('DELETE FROM peticion_retiros WHERE id=?');
        $sentencia->execute(array($id_retiro));
        return $sentencia->rowCount();
    }

}