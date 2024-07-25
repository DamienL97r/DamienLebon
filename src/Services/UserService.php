<?php

namespace App\Services;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;

readonly class UserService
{
    public function __construct(
        private EntityManagerInterface $manager,
        private UserRepository $userRepository
    ) {}

    public function getDev() {
        return $this->userRepository->findDev();
    }
}