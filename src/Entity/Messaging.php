<?php

namespace App\Entity;

use App\Repository\MessagingRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessagingRepository::class)]
class Messaging
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\OneToOne(inversedBy: 'messaging', targetEntity: User::class, cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private $User;

    #[ORM\ManyToMany(targetEntity: Discussion::class, mappedBy: 'participant')]
    private $discussions;


    public function __construct()
    {
        $this->blockedUser = new ArrayCollection();
        $this->discussions = new ArrayCollection();
    }

    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->User;
    }

    public function setUser(User $User): self
    {
        $this->User = $User;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getBlockedUser(): Collection
    {
        return $this->blockedUser;
    }

    public function addBlockedUser(User $blockedUser): self
    {
        if (!$this->blockedUser->contains($blockedUser)) {
            $this->blockedUser->add($blockedUser);
        }
        return $this;
    }

    public function removeBlockedUser(User $blockedUser): self
    {
        $this->blockedUser->removeElement($blockedUser);
        return $this;
    }

    /**
     * @return Collection<int, Discussion>
     */
    public function getDiscussions(): Collection
    {
        return $this->discussions;
    }

    public function addDiscussion(Discussion $discussion): self
    {
        if (!$this->discussions->contains($discussion)) {
            $this->discussions[] = $discussion;
            $discussion->addParticipant($this);
        }

        return $this;
    }

    public function removeDiscussion(Discussion $discussion): self
    {
        if ($this->discussions->removeElement($discussion)) {
            $discussion->removeParticipant($this);
        }

        return $this;
    }

}
