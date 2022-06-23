<?php

namespace App\Controller;

use App\Entity\Discussion;
use App\Entity\Message;
use App\Entity\Messaging;
use App\Entity\User;
use DateTime;
use DateTimeImmutable;
use Doctrine\Persistence\ManagerRegistry;
use Exception;
use PhpParser\Node\Expr\Cast\Array_;
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
        $messaging = $user->getMessaging();
        $discut = array();
        foreach($messaging->getDiscussions() as $discution){
            $userInvited = new User();
            foreach($discution->getParticipant() as $participant){
                if($participant->getId() != $user->getId()){
                    $userInvited = $participant->getUser();
                }
            }
            
            array_push($discut, [ 
                "id"=> $discution->getId(),
                "sender" => [
                    "id" => $userInvited->getId(),
                    "firstName" => $userInvited->getFirstName(),
                    "lastName" => $userInvited->getLastName(),
                ]
            ]);
        }
        $data = [
            "id" => $messaging->getId(),
            "discution" => $discut
        ];
        return $this->json([
            'messaging' => $data,
        ]);
    }
    /**
     * @route("/{id}", methods="GET")
     */
    public function getDiscustion(string $id, #[CurrentUser] ?User $tokenUser, ManagerRegistry $doctrine){
        
        $entityManager = $doctrine->getManager();  
        $dicustion = $entityManager->getRepository(Discussion::class)->find($id);

            $user = $entityManager->getRepository(User::class)->find($tokenUser->getId());

        if($dicustion->checkParticipant($user->getMessaging())){
            $message = array();

            foreach($dicustion->getMessage() as $msg){
                $isYou = ($msg->getSender()->getId() == $tokenUser->getId());
                array_push($message, [ 
                    'id' => $msg->getId(),
                    'content' => $msg->getContent(),
                    "createAt" => $msg->getCreateAt(),
                     "sender" => $msg->getSender(),
                      "isYou" => $isYou]);
            }

            $lastName = "";
            $firstName = "";

            foreach($dicustion->getParticipant() as $participant){
                if ($participant->getId() != $user->getId()){
                    $lastName = $participant->getUser()->getLastName();
                    $firstName = $participant->getUser()->getFirstName();
                }
            }

            return $this->json([
                'id' => $dicustion->getId(),
                'message' => $message,
                'lastName' => $lastName,
                'firstName' => $firstName,
                'blocked' => $dicustion->getBlocked()
            ]);
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
            $userConnected = $entityManager->getRepository(User::class)->find($tokenUser->id);
            $userInviter = $entityManager->getRepository(User::class)->find($data->userInvited);

            if(!$userInviter){
                return $this->json([], 400);
            }

            $dicustion = new Discussion();
            $dicustion->addParticipant($userInviter->getMessaging());
            $dicustion->addParticipant($userConnected->getMessaging());
            $entityManager->Persist($dicustion);
            $entityManager->flush();
            
            return $this->json([
                "message" => "succes.createMessage",
                "dicustion" => $dicustion
            ], 202);

        }catch (Exception $e){
            return $this->json(["message" => "error.serveur", "error" => $e->getMessage() ], 400);
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
     * @route("/blocked/{id}", methods="POST")
     */
    public function blocked(string $id,Request $request, ManagerRegistry $doctrine){
        $entityManager = $doctrine->getManager();
        $discution = $entityManager->getRepository(Discussion::class)->find($id);
        $discution->setBlocked(json_encode(array_push($discution->getBlocked(), [ "id" => $this->getUser()->id])));
        return $this->json([
            "message" => "succes",
            "code" => 201
        ], 201);
    }

    /**
     * @route("/message/", methods="POST")
     */
    public function addMessage(Request $request, ManagerRegistry $doctrine){
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->find($this->getUser()->id);
        $data = json_decode($request->getContent());
        $dicustion = $entityManager->getRepository(Discussion::class)->find($data->dicustionId);
        if(!$dicustion->checkParticipant($user->getMessaging())){
            return $this->json([], 400);
        }

        $message = new Message();
        $message->setDiscussion($dicustion);
        $message->setSender($user);
        $message->setContent($data->content);
        $message->setCreateAt(new DateTimeImmutable('now'));
        $entityManager->persist($message);
        $entityManager->flush();

        return $this->json([
            "message" => "succes",
            "code" => 201
        ], 201);
    }
}
