<?php
require_once "Model.php";
class UsersModel extends Model
{



    public function register($userName, $pass)
    {
        $query = $this->db->prepare('INSERT INTO users (user,password) values (?,?)');
        $query->execute(array($userName, password_hash($pass, PASSWORD_BCRYPT)));
        return $this->db->lastInsertId();
    }


    public function getByUsername($userName)
    {
        $query = $this->db->prepare('SELECT * FROM users where user =?');
        $query->execute(array($userName));
        $result = $query->fetch(PDO::FETCH_OBJ);
        return $result;
    }

    public function verifyUser($userName, $password)
    {
        $user = $this->getByUsername($userName);
        if (!empty($user) && password_verify($password, $user->password)) {
            return true;
        } else {
            return false;
        }
    }


}
