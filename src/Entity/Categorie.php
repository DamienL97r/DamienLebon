<?php

namespace App\Entity;

use App\Repository\CategorieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategorieRepository::class)]
class Categorie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    /**
     * @var Collection<int, Project>
     */
    #[ORM\ManyToMany(targetEntity: Project::class, inversedBy: 'categories')]
    private Collection $projects;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    /**
     * @var Collection<int, Hardskills>
     */
    #[ORM\OneToMany(targetEntity: Hardskills::class, mappedBy: 'categorie')]
    private Collection $hardskills;

    public function __construct()
    {
        $this->projects = new ArrayCollection();
        $this->hardskills = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return Collection<int, Project>
     */
    public function getProjects(): Collection
    {
        return $this->projects;
    }

    public function addProject(Project $project): static
    {
        if (!$this->projects->contains($project)) {
            $this->projects->add($project);
        }

        return $this;
    }

    public function removeProject(Project $project): static
    {
        $this->projects->removeElement($project);

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return Collection<int, Hardskills>
     */
    public function getHardskills(): Collection
    {
        return $this->hardskills;
    }

    public function addHardskill(Hardskills $hardskill): static
    {
        if (!$this->hardskills->contains($hardskill)) {
            $this->hardskills->add($hardskill);
            $hardskill->setCategorie($this);
        }

        return $this;
    }

    public function removeHardskill(Hardskills $hardskill): static
    {
        if ($this->hardskills->removeElement($hardskill)) {
            // set the owning side to null (unless already changed)
            if ($hardskill->getCategorie() === $this) {
                $hardskill->setCategorie(null);
            }
        }

        return $this;
    }
}
