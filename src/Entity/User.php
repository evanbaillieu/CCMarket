<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\MeController;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Lexik\Bundle\JWTAuthenticationBundle\Security\User\JWTUserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;


#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[
    ApiResource(
        //Operation sur des Collections
        collectionOperations : [
            'get' => [
                //Propriété que l'ont perut lire lors d'une reqêute de collection
                'normalization_context' => [
                    'groups' => ['read:User:collection']
                ],
            ],
            'post' =>[
                //Propriété que l'ont peut écrire lors de l'inscription
                'denormalization_context' => [
                    'groups' => ['write:User:collection']
                ],
            ]
        ],
        //Operation sur des items précis
        itemOperations : [
            'get' => [
                'normalization_context' => [
                    //Propriété que l'ont peut lire lors d'une requête d'un élément précis
                    'groups' => ['read:User:collection', 'read:User:item']
                ]
            ],
            'put' => [
                //Possibilité d'éditer son compte uniquement si on est l'utilisateur lui même ou alors un Admin
                "security" => "is_granted('ROLE_ADMIN') or id == user.getId() ",
                //Paramètres possible d'edit
                'denormalization_context' => ['groups' => ['edit:User:item']],
            ],

            'delete' => [
                //Possibilité de delete un compte uniquement si on est Admin
                'security' => 'is_granted("ROLE_ADMIN")'
            ],
        ],
    )
]
class User implements UserInterface, PasswordAuthenticatedUserInterface, JWTUserInterface
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid')]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\CustomIdGenerator("doctrine.uuid_generator")]
    #[Groups(['read:User:collection', 'read:Project:item'])]
    public $id;



    #[
        Email(),
        Groups(['write:User:collection','read:User:collection','edit:User:item', 'read:Project:item'])
    ]
    #[ORM\Column(type: 'string', length: 180, unique: true)]
    private $email;


    #[ORM\Column(type: 'json')]
    private $roles = [];


    #[ORM\Column(type: 'string')]
    #[
        Length(min:8),
        Groups(['write:User:collection','edit:User:item']),
    ]
    private $password;

    #[
        Groups(['write:User:collection','edit:User:item', 'read:User:collection','read:Project:item'])
    ]
    #[ORM\Column(type: 'string', length: 50)]
    private $firstName;

    #[
        Groups(['write:User:collection','edit:User:item','read:User:collection','read:Project:item'])
    ]
    #[ORM\Column(type: 'string', length: 70)]
    private $lastName;

    #[
        Groups(['write:User:collection','edit:User:item','read:User:item'])
    ]
    #[ORM\Column(type: 'date')]
    private $dateOfBirth;

    #[
        Groups(['edit:User:item','read:User:item'])
    ]
    #[ORM\OneToMany(mappedBy: 'leader', targetEntity: Project::class, orphanRemoval: true)]
    private $projects;



    #[
        Groups(['edit:User:item','read:User:item'])
    ]
    #[ORM\ManyToOne(targetEntity: ProfilType::class, inversedBy: 'user')]
    private $profilType;






    #[
        Groups(['edit:User:item','read:User:item'])
    ]
    #[ORM\ManyToOne(targetEntity: Contributor::class, inversedBy: 'user')]
    private $contributor;

    #[
        Groups(['edit:User:item','read:User:item'])
    ]
    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Experience::class)]
    private $experience;

    #[ORM\ManyToMany(targetEntity: Langues::class, mappedBy: 'user')]
    private $langues;

    #[ORM\OneToOne(mappedBy: 'User', targetEntity: Messaging::class, cascade: ['persist', 'remove'])]
    private $messaging;



    #[ORM\ManyToOne(targetEntity: Message::class, inversedBy: 'sender')]
    private $message;




    public function __construct(){
        $this->setRoles(['ROLE_USER']);
        $this->projects = new ArrayCollection();
        $this->experience = new ArrayCollection();
        $this->langues = new ArrayCollection();
        $this->messagings = new ArrayCollection();
    }


    public function getId(): ?string
    {
        return $this->id;
    }

    public function setId(?string $id): self
    {
        $this->id = $id;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;
        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getDateOfBirth(): ?\DateTimeInterface
    {
        return $this->dateOfBirth;
    }

    public function setDateOfBirth(\DateTimeInterface $dateOfBirth): self
    {
        $this->dateOfBirth = $dateOfBirth;

        return $this;
    }

    /**
     * @return Collection<int, Project>
     */
    public function getProjects(): Collection
    {
        return $this->projects;
    }

    public function addProject(Project $project): self
    {
        if (!$this->projects->contains($project)) {
            $this->projects[] = $project;
            $project->setLeader($this);
        }

        return $this;
    }

    public function removeProject(Project $project): self
    {
        if ($this->projects->removeElement($project)) {
            // set the owning side to null (unless already changed)
            if ($project->getLeader() === $this) {
                $project->setLeader(null);
            }
        }

        return $this;
    }




    public function getProfilType(): ?ProfilType
    {
        return $this->profilType;
    }

    public function setProfilType(?ProfilType $profilType): self
    {
        $this->profilType = $profilType;

        return $this;
    }


    public function getContributor(): ?Contributor
    {
        return $this->contributor;
    }

    public function setContributor(?Contributor $contributor): self
    {
        $this->contributor = $contributor;

        return $this;
    }

    public function __toString(){
        return $this->firstName;
    }

    /**
     * @return Collection<int, Experience>
     */
    public function getExperience(): Collection
    {
        return $this->experience;
    }

    public function addExperience(Experience $experience): self
    {
        if (!$this->experience->contains($experience)) {
            $this->experience[] = $experience;
            $experience->setUser($this);
        }

        return $this;
    }

    public function removeExperience(Experience $experience): self
    {
        if ($this->experience->removeElement($experience)) {
            // set the owning side to null (unless already changed)
            if ($experience->getUser() === $this) {
                $experience->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Langues>
     */
    public function getLangues(): Collection
    {
        return $this->langues;
    }

    public function addLangue(Langues $langue): self
    {
        if (!$this->langues->contains($langue)) {
            $this->langues[] = $langue;
            $langue->addUser($this);
        }

        return $this;
    }

    public function removeLangue(Langues $langue): self
    {
        if ($this->langues->removeElement($langue)) {
            $langue->removeUser($this);
        }

        return $this;
    }

    public static function createFromPayload($id, array $payload){
        $user = new User();
        $user = $user->setId($id)->setRoles($payload["roles"]);
        return $user;

    }

    public function getMessaging(): ?Messaging
    {
        return $this->messaging;
    }

    public function setMessaging(Messaging $messaging): self
    {
        // set the owning side of the relation if necessary
        if ($messaging->getUser() !== $this) {
            $messaging->setUser($this);
        }

        $this->messaging = $messaging;

        return $this;
    }

    /**
     * @return Collection<int, Messaging>
     */
    public function getMessagings(): Collection
    {
        return $this->messagings;
    }

    public function addMessaging(Messaging $messaging): self
    {
        if (!$this->messagings->contains($messaging)) {
            $this->messagings[] = $messaging;
        }

        return $this;
    }

    public function removeMessaging(Messaging $messaging): self
    {
        if ($this->messagings->removeElement($messaging)) {
            // set the owning side to null (unless already changed)
        }

        return $this;
    }

    public function getMessage(): ?Message
    {
        return $this->message;
    }

    public function setMessage(?Message $message): self
    {
        $this->message = $message;

        return $this;
    }

}
