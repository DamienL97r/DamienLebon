<?php

namespace App\Controller;

use App\Services\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'accueil')]
    public function index(
        UserService $userService
    ): Response
    {
        return $this->render('home/index.html.twig', [
            'user' => $userService->getDev(),
            'profileImage' => $userService->getDev()->getProfileImage(),
        ]);
    }
}
