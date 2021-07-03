<?php

class Session
{
    public function __construct()
    { }

    public function login($user)
    {
        $this->checkSession();
        $_SESSION['ID_USER'] = $user->id;
        $_SESSION['USER'] = $user->user;
    }

    public function logOut()
    {
        $this->checkSession();
        session_unset();
        session_destroy();
    }

   
    public function session()
    {
        echo session_id();
    }
    public function getLoggedUserName()
    {
        $this->checkSession();
        if(isset($_SESSION['USER']))
        {
            return $_SESSION['USER'];
        }
        
        else
        {
            return null;
        }
    }
    
    public function getLoggedUserId()
    {
        $this->checkSession();
        if(isset($_SESSION['ID_USER']))
        {
            return $_SESSION['ID_USER'];
        }
        
        else
        {
            return null;
        }
    }

    public function checkSession()
    {
        if (!isset($_SESSION)) {
            session_start();
        }

    }

}
