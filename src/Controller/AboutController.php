<?php

namespace App\Controller;

use App\Services\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AboutController extends AbstractController
{
    #[Route('/a-propos', name: 'a_propos')]
    public function index( 
        UserService $user
    ): Response
    {
        return $this->render('about/index.html.twig', [
            'user' => $user->getDev(),
            'cv' => $user->getDev()->getCV(),
        ]);
    }
}
