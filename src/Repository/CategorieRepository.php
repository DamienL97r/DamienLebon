<?php

namespace App\Repository;

use App\Entity\Categorie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Categorie>
 */
class CategorieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Categorie::class);
    }

    //    /**
    //     * @return Categorie[] Returns an array of Categorie objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    public function findHardskills(): array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.tag = :val')
            ->setParameter('val', 'Hardskill')
            ->getQuery()
            ->getResult()
        ;
    }

    public function findProjectCategory(): array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.tag = :val')
            ->setParameter('val', 'Projet')
            ->getQuery()
            ->getResult()
        ;
    }
}
