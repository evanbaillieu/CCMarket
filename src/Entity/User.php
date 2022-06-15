<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Validator\Constraints\UserPassword;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Doctrine\ORM\Id\AbstractIdGenerator;
use Symfony\Component\Validator\Constraints\NotCompromisedPassword;

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
                //Propriété que l'ont perut écrire lors de l'inscription
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
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid')]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\CustomIdGenerator("doctrine.uuid_generator")]
    #[Groups(['read:User:collection'])]
    private $id;



    #[
        Email(),
        Groups(['write:User:collection','read:User:collection','edit:User:item'])
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
        Groups(['write:User:collection','edit:User:item', 'read:User:collection'])
    ]
    #[ORM\Column(type: 'string', length: 50)]
    private $firstName;

    #[
        Groups(['write:User:collection','edit:User:item','read:User:collection'])
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
    #[ORM\OneToMany(mappedBy: 'User', targetEntity: Experience::class)]
    private $experiences;
    #[
        Groups(['edit:User:item','read:User:item'])
    ]
    #[ORM\ManyToOne(targetEntity: ProfilType::class, inversedBy: 'user')]
    private $profilType;
    #[
        Groups(['edit:User:item','read:User:item'])
    ]
    #[ORM\OneToMany(mappedBy: 'User', targetEntity: Language::class)]
    private $languages;
    #[
        Groups(['edit:User:item','read:User:item'])
    ]
    #[ORM\ManyToOne(targetEntity: Contributor::class, inversedBy: 'user')]
    private $contributor;



    public function __construct(){
        $this->setRoles(['ROLE_USER']);
        $this->projects = new ArrayCollection();
        $this->experiences = new ArrayCollection();
        $this->languages = new ArrayCollection();
    }


    public function getId(): ?string
    {
        return $this->id;
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

    /**
     * @return Collection<int, Experience>
     */
    public function getExperiences(): Collection
    {
        return $this->experiences;
    }

    public function addExperience(Experience $experience): self
    {
        if (!$this->experiences->contains($experience)) {
            $this->experiences[] = $experience;
            $experience->setUser($this);
        }

        return $this;
    }

    public function removeExperience(Experience $experience): self
    {
        if ($this->experiences->removeElement($experience)) {
            // set the owning side to null (unless already changed)
            if ($experience->getUser() === $this) {
                $experience->setUser(null);
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

    /**
     * @return Collection<int, Language>
     */
    public function getLanguages(): Collection
    {
        return $this->languages;
    }

    public function addLanguage(Language $language): self
    {
        if (!$this->languages->contains($language)) {
            $this->languages[] = $language;
            $language->setUser($this);
        }

        return $this;
    }

    public function removeLanguage(Language $language): self
    {
        if ($this->languages->removeElement($language)) {
            // set the owning side to null (unless already changed)
            if ($language->getUser() === $this) {
                $language->setUser(null);
            }
        }

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
}
