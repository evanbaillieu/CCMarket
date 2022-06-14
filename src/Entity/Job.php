<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\JobRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: JobRepository::class)]
#[ApiResource]

class Job
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid')]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\CustomIdGenerator("doctrine.uuid_generator")]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $title;

    #[ORM\Column(type: 'string', length: 255)]
    private $abstract;

    #[ORM\Column(type: 'text')]
    private $description;

    #[ORM\Column(type: 'boolean')]
    private $isBanned;

    #[ORM\ManyToOne(targetEntity: Project::class, inversedBy: 'jobs')]
    private $Project;

    #[ORM\ManyToOne(targetEntity: ProfilType::class, inversedBy: 'Job')]
    #[ORM\JoinColumn(nullable: false)]
    private $profilType;

    #[ORM\ManyToOne(targetEntity: Language::class, inversedBy: 'Job')]
    private $language;

    #[ORM\ManyToOne(targetEntity: Source::class, inversedBy: 'jobs')]
    private $Source;

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

    public function getLanguage(): ?Language
    {
        return $this->language;
    }

    public function setLanguage(?Language $language): self
    {
        $this->language = $language;

        return $this;
    }

    public function getSource(): ?Source
    {
        return $this->Source;
    }

    public function setSource(?Source $Source): self
    {
        $this->Source = $Source;

        return $this;
    }
}
