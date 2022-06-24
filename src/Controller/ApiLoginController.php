<?php

namespace App\Controller;

use App\Entity\Messaging;
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

        if (!$data){
            return $this->json([
                'message' => 'error.nomRemplie'
            ], Response::HTTP_BAD_REQUEST);
        }
        $user = $entityManager->getRepository(User::class)->findByEmail($data['email']);
        
        if ($user){
            return $this->json([
                'message' => 'error.emailempty'
            ], Response::HTTP_BAD_REQUEST);
        }

        $user = new User();
        $messaging  = new Messaging();

        $user->setFirstName($data['firstName']);
        $user->setLastName($data['lastName']);
        $user->setEmail($data['email']);
        $user->setDateOfBirth(new DateTime($data['dateOfBirth']));
        $user->setPassword($passwordHasher->hashPassword($user, $data['password']));
        $user->setMessaging($messaging);
        $entityManager->persist($messaging);
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


            $projects = array();

            foreach ($fullUser->getProjects() as $project){
                $jobs = array();
                foreach ($project->getJobs() as $job){
                    array_push($jobs, [
                        "id" => $job->getId(),
                        "title" => $job->getTitle(),
                        "abstract" => $job->getAbstract(),
                        "description" => $job->getDescription(),
                        "isBanned" => $job->isIsBanned(),
                        ]);
                }
                $category = [
                    'name' => $project->getCategory()->getName(),
                    'id' => $project->getCategory()->getId(),
                ];

                $sources = array();
                foreach ($project->getSource() as $source){
                    array_push($sources, [
                        "id" => $source->getId(),
                        "type" => $source->getType(),
                        "link" => $source->getLink(),
                    ]);
                }

                array_push($projects, [
                    "jobs" => $jobs,
                    "sources" => $sources,
                    "category" => $category,
                    "id" => $project->getId(),
                    "title" => $project->getTitle(),
                    "abstract" => $project->getAbstract(),
                    "isBanned" => $project->isIsBanned(),

                ]);
            }


            return $this->json([
                'user' => $fullUser,
                'profilType' => $fullUser->getProfilType(),
                'projects' => $projects,
                'experiences' => $fullUser->getExperience(),
            ]);
        }

        return $this->json([
            'error' => 'error'
        ], Response::HTTP_BAD_REQUEST);
    }

    /**
     * @route("/changePass", name="api_logout", methods="POST")
     */
    public function changePWD(Request $request, ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher){
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        $user = $entityManager->getRepository(User::class)->find($this->getUser()->id);
        
        if ($passwordHasher->isPasswordValid($user, $data['currentPassword']))
        {
            $user->setPassword($passwordHasher->hashPassword($user, $data['newPassword']));
            $entityManager->persist($user);
            $entityManager->flush();
            return $this->json([
                "message" => "change success"
            ], Response::HTTP_ACCEPTED);
        } else {
            return $this->json([
                "message" => "not access"
            ], Response::HTTP_ACCEPTED);
        }
    }

}
