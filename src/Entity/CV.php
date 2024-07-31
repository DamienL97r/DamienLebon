<?php

namespace App\Entity;

use App\Repository\CVRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: CVRepository::class)]
#[Vich\Uploadable]
class CV
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name = null;

    #[Vich\UploadableField(mapping: 'cv_file', fileNameProperty: 'name')]
    private ?File $cvFile = null;

    #[ORM\OneToOne(inversedBy: 'cV')]
    private ?User $user = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $updatedAt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function setCvFile(?File $cv = null): void
    {
        $this->cvFile = $cv;

        if (null !== $cv) {
            // If there is a file, update the updatedAt field
            $this->updatedAt = new \DateTimeImmutable('now');
        }
    }

    public function getCvFile(): ?File
    {
        return $this->cvFile;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): void
    {
        $this->user = $user;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }
}
