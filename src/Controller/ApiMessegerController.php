<?php

namespace App\Controller;

use App\Entity\Discussion;
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
    /**
     * @route("/{id}", methods="GET")
     */
    public function getDiscustion(string $id, ManagerRegistry $doctrine){
        
        $user = $this->getUser();
        $entityManager = $doctrine->getManager();  
        $dicustion = $entityManager->getRepository(Discussion::class)->find($id);

        foreach($dicustion->getParticipant() as $participant){
            if($participant->getId() == $user["id"]){
                return $this->json(["discution" => $dicustion]);
            }
        }

        return $this->json(["message" => "error.notAcces"]);
    }

    /**
     * @route("/dicustion/", methods="Post")
     */
    public function addDiscustion(Request $request, ManagerRegistry $doctrine){
        $entityManager = $doctrine->getManager(); 
        $data = json_decode($request->getContent());
        $tokenUser = $this->getUser();
        $userConnected = $entityManager->getRepository(User::class)->find($tokenUser['id']);

        $userInviter = $entityManager->getRepository(User::class)->find($data['userInvited']);
        
        if(!$userInviter){
            return $this->json([], 400);
        }

        $dicustion = new Discussion();
        $dicustion->addParticipant($userInviter);
        $dicustion->addParticipant($userConnected);


    }

    /**
     * @route("/dicustion/last/{id}", methods="get")
     */
    public function getlastMessage(string $id){
        
    }

    /**
     * @route("/message/", methods="POST")
     */
    public function addMessage(){
        
    }

}
