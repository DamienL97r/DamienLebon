<?php

namespace App\Services;

use App\Repository\CategorieRepository;
use Doctrine\ORM\EntityManagerInterface;

readonly class CategoryService
{
    public function __construct(
        private EntityManagerInterface $manager,
        private CategorieRepository $categorieRepository,
    ) {
    }

    public function getProjectCategory()
    {
        return $this->categorieRepository->findProjectCategory();
    }
}
