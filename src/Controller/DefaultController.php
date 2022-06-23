<?php

namespace App\Controller;

use App\Entity\Project;
use Doctrine\Persistence\ManagerRegistry;
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
     * @Route("/api/links", methods="POST")
     */
    public function setFave(Request $request , ManagerRegistry $doctrine): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->find($this->getUser()->id);
        $data = json_encode($request->getContent, true);
        if($data['projectId']){
            $project = $entityManager->getRepository(Project::class)->find($data['projectId']);
            $user->addFavorite($project);
            $project->incrementStar();
            $entityManager->flush();
            return $this->json(["message" => $user], 201);
        }

        return $this->json([], 404);
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

