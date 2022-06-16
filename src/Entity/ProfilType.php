<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ProfilTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProfilTypeRepository::class)]
#[ApiResource]

class ProfilType
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid')]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\CustomIdGenerator("doctrine.uuid_generator")]
    #[Groups(['read:User:item', 'read:Job:item'])]
    private $id;

    #[Groups(['read:User:item', 'read:Job:item'])]
    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\OneToMany(mappedBy: 'profilType', targetEntity: User::class)]
    private $user;

    #[ORM\OneToMany(mappedBy: 'profilType', targetEntity: Job::class)]
    private $Job;

    public function __construct()
    {
        $this->user = new ArrayCollection();
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

    /**
     * @return Collection<int, User>
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user[] = $user;
            $user->setProfilType($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->user->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getProfilType() === $this) {
                $user->setProfilType(null);
            }
        }

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
            $job->setProfilType($this);
        }

        return $this;
    }

    public function removeJob(Job $job): self
    {
        if ($this->Job->removeElement($job)) {
            // set the owning side to null (unless already changed)
            if ($job->getProfilType() === $this) {
                $job->setProfilType(null);
            }
        }

        return $this;
    }
}
