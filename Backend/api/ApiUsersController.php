
<?php
include_once 'api/ApiController.php';
include_once 'Model/UsersModel.php';


class ApiUsersController extends ApiController
{


    public function __construct()
    {
        parent::__construct();  
        $this->model = new UsersModel();
    }


    public function login()
    {
        $user = $this->inputData->user;
        $pass = $this->inputData->password;

        if ($this->model->verifyUser($user, $pass)) {
            $user = $this->model->getByUsername($user);
            $this->session->login($user);
            $this->view->response("Usuario Loggeado correctamente", 200);
        } else {
            $this->view->response("Usuario o Contraseña erroneos", 404);
        }
    }
    public function logout()
    {
        $this->session->logOut();
        $this->view->response("Usuario Deslogueado", 200);
    }
    public function register()
    {
        if ($this->inputData->password != $this->inputData->confirm_password) {
            $this->view->response("Las contraseñas no coinciden", 404);
        } else {
            $user = $this->inputData->user;
            if(!$this->model->getByUsername($user))
            {
                $pass = $this->inputData->password;
                $this->model->register($user, $pass);
                $user = $this->model->getByUsername($user);
                $this->session->login($user);
                $this->view->response("el usuario fue creado satisfactoriamente", 404);
            }
            else{
                $this->view->response("el usuario ya existe", 404);
            }
       
        
        }
    }
    public function userSession()
    {
        $this->view->response($this->session->getLoggedUserName(), 200);
    }
}
