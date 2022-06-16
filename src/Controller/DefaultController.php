<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
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
