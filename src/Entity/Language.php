<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\LanguageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: LanguageRepository::class)]
#[ApiResource]

class Language
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
    private $name;

    #[Groups([
        'read:User:item'
    ])]
    #[ORM\Column(type: 'string', length: 255)]
    private $type;

    #[ORM\OneToMany(mappedBy: 'language', targetEntity: Job::class)]
    private $Job;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'languages')]
    private $User;

    public function __construct()
    {
        $this->Job = new ArrayCollection();
    }

    public function getId(): ?string
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection<int, Job>
     */
    public function getJob(): Collection
    {
        return $this->Job;
    }

    public function addJob(Job $job): self
    {
        if (!$this->Job->contains($job)) {
            $this->Job[] = $job;
            $job->setLanguage($this);
        }

        return $this;
    }

    public function removeJob(Job $job): self
    {
        if ($this->Job->removeElement($job)) {
            // set the owning side to null (unless already changed)
            if ($job->getLanguage() === $this) {
                $job->setLanguage(null);
            }
        }

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->User;
    }

    public function setUser(?User $User): self
    {
        $this->User = $User;

        return $this;
    }
}
