<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CategoriesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: CategoriesRepository::class)]
#[ApiResource(
    collectionOperations : [
        'get' =>[
            "normalization_context" => ['groups' => ['read:Cat:collection']],
        ],
        'post' =>[
            "security" => "is_granted('ROLE_ADMIN')",
        ],
    ],
    itemOperations: [
        'get' => [
            "normalization_context" => ['groups' => ['read:Cat:item']],
        ],
        'delete' => [
            "security" => "is_granted('ROLE_ADMIN')",
        ],
        'put' => [
            "security" => "is_granted('ROLE_ADMIN')",
        ],

    ]

)]
class Categories
{
    #[ORM\Id]
    #[ORM\Column(type: 'uuid')]
    #[ORM\GeneratedValue(strategy: "CUSTOM")]
    #[ORM\CustomIdGenerator("doctrine.uuid_generator")]
    #[Groups(['read:Project:collection',"read:Cat:collection"])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['read:Project:collection', "read:Cat:collection"])]
    private $name;

    #[Groups(["read:Cat:collection", 'read:Cat:item'])]
    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Project::class)]
    private $projects;

    public function __construct()
    {
        $this->projects = new ArrayCollection();
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
            $project->setCategory($this);
        }

        return $this;
    }

    public function removeProject(Project $project): self
    {
        if ($this->projects->removeElement($project)) {
            // set the owning side to null (unless already changed)
            if ($project->getCategory() === $this) {
                $project->setCategory(null);
            }
        }

        return $this;
    }

    public function __toString(){
        return $this->name;
    }
}