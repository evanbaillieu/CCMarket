<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
class DefaultController extends AbstractController
{
    
    function __construct(private Security $security)
    {
        $this->security = $security;
    }
    
    /**
     * @Route("/api/me", methods="POST")
     */
    public function r(Request $request): JsonResponse
    {
        $user = $this->security->getUser();
        dd($user);
        dd($request);
        return $this->json([
            'user' => $user,
            'requeste' => $request
        ]);
    }
    /**
     * @Route("/{reactRouting}/{reactRouting2}/{reactRouting3}", name="home", defaults={"reactRouting": null, "reactRouting2": null, "reactRouting3": null})
     */
    public function index(): Response
    {
        return $this->render('base.html.twig', [
            'controller_name' => 'Admin Dashboard',
        ]);
    }

}

