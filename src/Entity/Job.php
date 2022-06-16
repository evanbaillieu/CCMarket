<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\JobRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: JobRepository::class)]
#[ApiResource(
    collectionOperations : [
        'get' => [
            //Get uniquement les paramètres de ce group lors d'un get collection
            'normalization_context' => ['groups' => ['read:Job:collection']]
        ],
        'post'=> [
            'denormalization_context' => ["groups" => ["write:Job:collection"]],
            "security" => "is_granted('ROLE_USER')"
        ]
    ],
    itemOperations: [
        'get' => [
            'normalization_context' => ['groups' => ['read:Job:item', 'read:Job:collection']]
        ],
        'put' =>[
            "security" => "is_granted('ROLE_ADMIN') or (Project.leader == user)",
            "denormalization_context" => ['groups' => ['write:Job:collection']]
        ],
        'delete' => [
            "security" => "is_granted('ROLE_USER')",
        ]
    ]
)]

class Job
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid')]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\CustomIdGenerator("doctrine.uuid_generator")]
    #[Groups(['read:Job:collection'])]
    private $id;

    #[Groups(['read:Project:item', 'read:Job:collection',"write:Job:collection"])]
    #[ORM\Column(type: 'string', length: 255)]
    private $title;

    #[Groups(['read:Project:item', 'read:Job:collection',"write:Job:collection"])]
    #[ORM\Column(type: 'string', length: 255)]
    private $abstract;

    #[Groups(['read:Project:item', 'read:Job:collection',"write:Job:collection"])]
    #[ORM\Column(type: 'text')]
    private $description;

    #[Groups(['read:Project:item', 'read:Job:collection'])]
    #[ORM\Column(type: 'boolean')]
    private $isBanned;


    #[Groups(['read:Job:item',"write:Job:collection"])]
    #[ORM\ManyToOne(targetEntity: Project::class, inversedBy: 'jobs')]
    private $Project;

    #[Groups(['read:Job:item',"write:Job:collection"])]
    #[ORM\ManyToOne(targetEntity: ProfilType::class, inversedBy: 'Job')]
    #[ORM\JoinColumn(nullable: false)]
    private $profilType;


    #[Groups(['read:Job:collection',"write:Job:collection"])]
    #[ORM\OneToMany(mappedBy: 'Job', targetEntity: Source::class)]
    private $sources;

    #[ORM\Column(type: 'datetime')]
    private $createdAt;

    public function __construct()
    {
        $this->sources = new ArrayCollection();
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

    public function isIsBanned(): ?bool
    {
        return $this->isBanned;
    }

    public function setIsBanned(bool $isBanned): self
    {
        $this->isBanned = $isBanned;

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->Project;
    }

    public function setProject(?Project $Project): self
    {
        $this->Project = $Project;

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
            $source->setJob($this);
        }

        return $this;
    }

    public function removeSource(Source $source): self
    {
        if ($this->sources->removeElement($source)) {
            // set the owning side to null (unless already changed)
            if ($source->getJob() === $this) {
                $source->setJob(null);
            }
        }

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

}
