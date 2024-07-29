<?php

namespace App\Repository;

use App\Entity\Project;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Project>
 */
class ProjectRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Project::class);
    }

    public function findVisibleProjects(): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.portfolio = :portfolio')
            ->setParameter('portfolio', true)
            ->getQuery()
            ->getResult();
    }
}
