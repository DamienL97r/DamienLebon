<?php

namespace App\Entity;

use App\Repository\CategorieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: CategorieRepository::class)]
#[Vich\Uploadable]
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

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    #[Vich\UploadableField(mapping: 'categorie_file', fileNameProperty: 'image')]
    private ?File $categorieFile = null;

    /**
     * @var Collection<int, Hardskills>
     */
    #[ORM\OneToMany(targetEntity: Hardskills::class, mappedBy: 'categorie')]
    private Collection $hardskills;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tag = null;

    /**
     * @var Collection<int, Project>
     */
    #[ORM\OneToMany(targetEntity: Project::class, mappedBy: 'category')]
    private Collection $projects;

    public function __construct()
    {
        $this->hardskills = new ArrayCollection();
        $this->projects = new ArrayCollection();
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

    public function setCategorieFile(?File $image = null): void
    {
        $this->categorieFile = $image;
        if (null !== $image) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->image = $this->getImage();
        }
    }

    public function getCategorieFile(): ?File
    {
        return $this->categorieFile;
    }

    public function getTag(): ?string
    {
        return $this->tag;
    }

    public function setTag(?string $tag): static
    {
        $this->tag = $tag;

        return $this;
    }

    public function __toString()
    {
        return $this->title;
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
            $project->setCategory($this);
        }

        return $this;
    }

    public function removeProject(Project $project): static
    {
        if ($this->projects->removeElement($project)) {
            // set the owning side to null (unless already changed)
            if ($project->getCategory() === $this) {
                $project->setCategory(null);
            }
        }

        return $this;
    }
}
