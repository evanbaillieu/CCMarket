<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
/**
    * @Route("/api/messenger")
    */
class ApiMessegerController extends AbstractController
{
    /**
     * @Route("/me", methods="GET")
     */
    public function index( #[CurrentUser] ?User $tokkenUser, ManagerRegistry $doctrine): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        if (!$tokkenUser){
            return $this->json([
                'message'=>'error.noConnected'
            ]);
        }

        $user = $entityManager->getRepository(User::class)->find($tokkenUser->getId());
        
        return $this->json([
            'messaging' => $user->getMessaging()
        ]);
    }
}
