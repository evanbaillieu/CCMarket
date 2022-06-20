<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;

class MeController extends AbstractController
{
    function __construct(private Security $security){}
    
    public function __invoke(): User
    {
        $user = $this->security->getUser();
        dd($user);
        return $user;  
    }

    public function getMe()
    {
        $user = $this->getUser();
        return $this->JSON([
            'user' => $user
        ]);
    }
}
