<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SourceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: SourceRepository::class)]
#[ApiResource]

class Source
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid')]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\CustomIdGenerator("doctrine.uuid_generator")]
    #[Groups([
        'read:User:item',
        'read:Project:collection',
        'read:Job:collection'
    ])]
    private $id;

    #[Groups([
        'read:User:item',
        'read:Project:collection',
        'read:Job:collection',
        'write:Project:collection',
        "write:Job:collection"
    ])]
    #[ORM\Column(type: 'string', length: 255)]
    private $type;

    #[Groups([
        'read:User:item',
        'read:Project:collection',
        'read:Job:collection',
        'write:Job:collection',
        'write:Project:collection',

    ])]
    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[Groups([
        'read:User:item',
        'read:Project:collection',
        'read:Job:collection',
        'write:Job:collection',
        'write:Project:collection',

    ])]
    #[ORM\Column(type: 'string', length: 255)]
    private $link;



    #[ORM\ManyToOne(targetEntity: Job::class, inversedBy: 'sources')]
    private $Job;

    #[ORM\ManyToMany(targetEntity: Project::class, mappedBy: 'source')]
    private $projects;

    public function __construct()
    {
        $this->projects = new ArrayCollection();
    }

    public function getId():string{
        return $this->id;
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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }





    public function getJob(): ?Job
    {
        return $this->Job;
    }

    public function setJob(?Job $Job): self
    {
        $this->Job = $Job;

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
            $project->addSource($this);
        }

        return $this;
    }

    public function removeProject(Project $project): self
    {
        if ($this->projects->removeElement($project)) {
            $project->removeSource($this);
        }

        return $this;
    }



    public function __toString()
    {
        return $this->link;
    }

}
