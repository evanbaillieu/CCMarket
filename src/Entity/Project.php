<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Uid\Uuid;

#[ApiResource(

    collectionOperations : [
        'get' => [
            //Get uniquement les paramètres de ce group lors d'un get collection
            'normalization_context' => ['groups' => ['read:Project:collection']]
        ],
        'post' =>[
            //Création de projet uniquement si il est connecté
            "security" => "is_granted('ROLE_USER')",
            //Lors d'un ajout de projet par un utilisateur il ne peut renseigné uniquement les infos de ce groupe
            'denormalization_context' => ['groups' => ['write:Project:collection']]
        ]

    ],
    itemOperations : [
        'get' => [
            //Get uniquement les paramètres de ce group lors d'un get d'item précis
            'normalization_context' => ['groups' => ['read:Project:collection', 'read:Project:item']]
        ],
        // Delete uniquement disponible pour les utilisateur Admin
        "delete" => ["security" => "is_granted('ROLE_ADMIN')"],
        'put' => [
            //Elements que l'ont peut edit
            'denormalization_context' => ['groups' => ['edit:Project:item']],
            //Peut edit uniquement si il est Admin ou leader du projet
            "security" => "is_granted('ROLE_ADMIN') or (object.getLeader() == user)"
        ]
    ]

)]
#[ORM\Entity(repositoryClass: ProjectRepository::class)]
class Project
{



    #[ORM\Id]
    #[ORM\Column(type: 'uuid')]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\CustomIdGenerator("doctrine.uuid_generator")]
    #[Groups(['read:Project:collection',
        'read:Job:item'])]
    private $id;

    #[Groups(['read:Project:collection','write:Project:collection','edit:Project:item', 'read:User:item',
        'read:Job:item', 'read:Cat:item'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $title;

    #[Groups(['read:Project:collection','write:Project:collection','edit:Project:item', 'read:User:item',
        'read:Job:item', 'read:Cat:item'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $abstract;

    #[Groups(['read:Project:item','write:Project:collection','edit:Project:item'])]
    #[ORM\Column(type: 'text')]
    private $description;

    #[Groups(['read:Project:item'])]
    #[ORM\Column(type: 'integer', nullable: true)]
    private $nbStar;

    #[Groups(['read:Project:item','read:Project:collection','write:Project:collection',
        'read:Job:item'])]
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'projects')]
    #[ORM\JoinColumn(nullable: false)]
    private $leader;

    #[Groups('read:Project:collection')]
    #[ORM\Column(type: 'boolean')]
    private $isBanned;

    #[Groups(['read:Project:collection','write:Project:collection'])]
    #[ORM\OneToMany(mappedBy: 'Project', targetEntity: Job::class)]
    private $jobs;

    #[Groups(['read:Project:collection','write:Project:collection'])]
    #[ORM\ManyToOne(targetEntity: Categories::class, inversedBy: 'projects')]
    private $category;

    #[Groups('read:Project:collection')]
    #[ORM\ManyToMany(targetEntity: Favorite::class, mappedBy: 'project')]
    private $favorites;


    #[Groups(['read:Project:collection','write:Project:collection'])]
    #[ORM\OneToMany(mappedBy: 'Project', targetEntity: Contributor::class)]
    private $contributors;

    #[Groups(['read:Project:collection','write:Project:collection', 'read:User:item'])]
    #[ORM\OneToMany(mappedBy: 'Project', targetEntity: Source::class)]
    private $sources;

    #[ORM\Column(type: 'datetime')]
    private $CreatedAt;


    public function __construct()
    {
        $this->jobs = new ArrayCollection();
        $this->favorites = new ArrayCollection();
        $this->contributors = new ArrayCollection();
        $this->setIsBanned(false);
        $this->sources = new ArrayCollection();
        $this->setCreatedAt(new \DateTime());
    }



    public function getId(): ?string
    {
        return $this->id;
    }



    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getAbstract(): ?string
    {
        return $this->abstract;
    }

    public function setAbstract(string $abstract): self
    {
        $this->abstract = $abstract;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getNbStar(): ?int
    {
        return $this->nbStar;
    }

    public function setNbStar(?int $nbStar): self
    {
        $this->nbStar = $nbStar;

        return $this;
    }

    public function getLeader(): ?User
    {
        return $this->leader;
    }

    public function setLeader(?User $leader): self
    {
        $this->leader = $leader;

        return $this;
    }

    public function isIsBanned(): ?bool
    {
        return $this->isBanned;
    }

    public function setIsBanned(bool $isBanned): self
    {
        $this->isBanned = $isBanned;

        return $this;
    }

    /**
     * @return Collection<string, Job>
     */
    public function getJobs(): Collection
    {
        return $this->jobs;
    }

    public function addJob(Job $job): self
    {
        if (!$this->jobs->contains($job)) {
            $this->jobs[] = $job;
            $job->setProject($this);
        }

        return $this;
    }

    public function removeJob(Job $job): self
    {
        if ($this->jobs->removeElement($job)) {
            // set the owning side to null (unless already changed)
            if ($job->getProject() === $this) {
                $job->setProject(null);
            }
        }

        return $this;
    }

    public function getCategory(): ?Categories
    {
        return $this->category;
    }

    public function setCategory(?Categories $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection<string, Favorite>
     */
    public function getFavorites(): Collection
    {
        return $this->favorites;
    }

    public function addFavorite(Favorite $favorite): self
    {
        if (!$this->favorites->contains($favorite)) {
            $this->favorites[] = $favorite;
            $favorite->addProject($this);
        }

        return $this;
    }

    public function removeFavorite(Favorite $favorite): self
    {
        if ($this->favorites->removeElement($favorite)) {
            $favorite->removeProject($this);
        }

        return $this;
    }




    /**
     * @return Collection<int, Contributor>
     */
    public function getContributors(): Collection
    {
        return $this->contributors;
    }

    public function addContributor(Contributor $contributor): self
    {
        if (!$this->contributors->contains($contributor)) {
            $this->contributors[] = $contributor;
            $contributor->setProject($this);
        }

        return $this;
    }

    public function removeContributor(Contributor $contributor): self
    {
        if ($this->contributors->removeElement($contributor)) {
            // set the owning side to null (unless already changed)
            if ($contributor->getProject() === $this) {
                $contributor->setProject(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Source>
     */
    public function getSources(): Collection
    {
        return $this->sources;
    }

    public function addSource(Source $source): self
    {
        if (!$this->sources->contains($source)) {
            $this->sources[] = $source;
            $source->setProject($this);
        }

        return $this;
    }

    public function removeSource(Source $source): self
    {
        if ($this->sources->removeElement($source)) {
            // set the owning side to null (unless already changed)
            if ($source->getProject() === $this) {
                $source->setProject(null);
            }
        }

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->CreatedAt;
    }

    public function setCreatedAt(\DateTimeInterface $CreatedAt): self
    {
        $this->CreatedAt = $CreatedAt;

        return $this;
    }

    public function __toString(){
        return $this->title;
    }


}
