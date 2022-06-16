<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Security;

class MeController extends AbstractController
{
    function __Constructor(Security $security){}
    
    public function __invoke()
    {
        $user = $this->security->getUser();
        return $user;
    }
}
