<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ExperienceRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: ExperienceRepository::class)]
#[ApiResource]
class Experience
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid')]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\CustomIdGenerator("doctrine.uuid_generator")]
    private $id;

    #[Groups([
        'read:User:item'
    ])]
    #[ORM\Column(type: 'string', length: 255)]
    private $title;

    #[Groups([
        'read:User:item'
    ])]
    #[ORM\Column(type: 'text')]
    private $abstract;

    #[Groups([
        'read:User:item'
    ])]
    #[ORM\Column(type: 'date')]
    private $startDate;

    #[Groups([
        'read:User:item'
    ])]
    #[ORM\Column(type: 'date', nullable: true)]
    private $endDate;

    #[Groups([
        'read:User:item'
    ])]
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'experience')]
    private $user;


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

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(?\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

}