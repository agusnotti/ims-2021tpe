
<?php
include_once 'responses/ApiView.php';
include_once 'Session.php';

class ApiController 
{
    protected $model;
    protected $view;
    protected $inputData;
    protected $session;

    public function __construct()
    {

        $this->view = new APIView();
        $this->inputData = json_decode(file_get_contents('php://input'));
        $this->session = new Session();
    }

}