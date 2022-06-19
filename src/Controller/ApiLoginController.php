<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

/**
 * @route("/api/auth")
 */
class ApiLoginController extends AbstractController
{

    
    /**
     * @Route("/login", name="app_login")
     */
    public function index(#[CurrentUser] ?User $user): JsonResponse
    {
        if (null === $user) {
            return $this->json([
                'message' => 'error mdp',
            ], Response::HTTP_UNAUTHORIZED);
        }

        return $this->json([
            'user' => $user,
        ]);
    }

    /**
     * @Route("/register", methods="POST");
     */
    public function register(Request $request, ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        $user = $entityManager->getRepository(User::class)->findByEmail($data['email']);
        
        if ($user){
            return $this->json([
                'message' => 'error.emailempty'
            ], Response::HTTP_BAD_REQUEST);
        }

        $user = new User();

        $user->setFirstName($data['firstname']);
        $user->setLastName($data['lastname']);
        $user->setEmail($data['email']);
        $user->setDateOfBirth(new DateTime($data['dateDeNaisance']));
        $user->setPassword($passwordHasher->hashPassword($user, $data['password']));
        $entityManager->persist($user);
        $entityManager->flush();
        
        return $this->json([
            'user' => $user
        ]);
    }

    /**
     * @route("/me", methods="GET")
     */
    public function getME(#[CurrentUser] ?User $user, ManagerRegistry $doctrine){
        $entityManager = $doctrine->getManager();

        if($user){
            $fullUser = $entityManager->getRepository(User::class)->find($user->getId());

            return $this->json([
                'user' => $fullUser
            ]);
        }

        return $this->json([
            'error' => 'error'
        ], Response::HTTP_BAD_REQUEST);
    }

    /**
     * @route("/logout", name="api_logout", methods="POST")
     */
    public function logout(){
    }

}
