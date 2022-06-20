<?php

namespace App\Controller;

use App\Entity\Discussion;
use App\Entity\Message;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\RememberMe\PersistentToken;
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
        try{
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
            $entityManager->Persist($dicustion);
            $entityManager->flush();
            
            return $this->json([
                "message" => "succes.createMessage",
                "dicustion" => $dicustion
            ], 202);
        }catch (Exception $e){
            return $this->json(["message" => "error.serveur" ], 400);
        }
    }

    /**
     * @route("/dicustion/last/{id}", methods="get")
     */
    public function islastMessage(string $id, ManagerRegistry $doctrine){
        $entityManager = $doctrine->getManager();
        $dicustion = $entityManager->getRepository(Discussion::class)->find($id);
        $lastMessage = $dicustion->getLastMessage();
        if ($lastMessage){
            return $this->json([
                "lastMessage" => $lastMessage
            ]);
        }
        return $this->json([
            "message" => "error.lastMessageIsEmpty"
        ], 404);
    }

    /**
     * @route("/message/", methods="POST")
     */
    public function addMessage(Request $request, ManagerRegistry $doctrine){
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->find($this->getUser()['id']);
        $data = json_encode($request->getContent());
        $dicustion = $entityManager->getRepository(Discussion::class)->find($data['dicustionId']);
        $message = new Message();
        $message->setDiscussion($dicustion);
        $message->setSender($user);
        $message->setContent($data['content']);
        $entityManager->persist($message);
        $entityManager->flush();

        return $this->json([
            "discution" => $dicustion
        ]);
    }
}
