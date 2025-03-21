<?php

namespace App\Services;

use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;

readonly class ProjectService
{
    public function __construct(
        private EntityManagerInterface $manager,
        private ProjectRepository $projectRepository,
    ) {
    }

    public function getVisibleProjects()
    {
        return $this->projectRepository->findVisibleProjects();
    }
}
