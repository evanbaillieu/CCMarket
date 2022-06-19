<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MessegerController extends AbstractController
{
    #[Route('/messeger', name: 'app_messeger')]
    public function index(): Response
    {
        return $this->render('messeger/index.html.twig', [
            'controller_name' => 'MessegerController',
        ]);
    }
}
