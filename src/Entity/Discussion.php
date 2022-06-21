<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DiscussionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DiscussionRepository::class)]
#[ApiResource()]
class Discussion
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid')]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\CustomIdGenerator("doctrine.uuid_generator")]
    private $id;

    #[ORM\ManyToMany(targetEntity: Messaging::class, inversedBy: 'discussions')]
    private $participant;

    #[ORM\OneToMany(mappedBy: 'discussion', targetEntity: Message::class)]
    private $message;

    #[ORM\Column(type: 'json')]
    private $blocked = [];

    public function __construct()
    {
        $this->participant = new ArrayCollection();
        $this->message = new ArrayCollection();
    }

    public function getId(): ?string
    {
        return $this->id;
    }

    /**
     * @return Collection<int, Messaging>
     */
    public function getParticipant(): Collection
    {
        return $this->participant;
    }

    public function addParticipant(Messaging $participant): self
    {
        if (!$this->participant->contains($participant)) {
            $this->participant[] = $participant;
        }

        return $this;
    }

    public function removeParticipant(Messaging $participant): self
    {
        $this->participant->removeElement($participant);

        return $this;
    }

    /**
     * @return Collection<int, Message>
     */
    public function getMessage(): Collection
    {
        return $this->message;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->message->contains($message)) {
            $this->message[] = $message;
            $message->setDiscussion($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->message->removeElement($message)) {
            // set the owning side to null (unless already changed)
            if ($message->getDiscussion() === $this) {
                $message->setDiscussion(null);
            }
        }

        return $this;
    }

    public function checkParticipant(Messaging $messaging): bool
    {
        $checkUser = false;
        foreach($this->participant as $participant)
        {   
            if($participant->getId() == $messaging->getId()){
                $checkUser = true;
            }
        }
        return $checkUser;
    }

    public function getBlocked(): ?array
    {
        return $this->blocked;
    }

    public function setBlocked(array $blocked): self
    {
        $this->blocked = $blocked;

        return $this;
    }
}
