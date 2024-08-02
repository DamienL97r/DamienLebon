<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class FaviconController extends AbstractController
{
    #[Route('/favicon.ico', name: 'favicon')]
    public function index(): Response
    {
        return $this->render('favicon/index.html.twig', [
            'controller_name' => 'FaviconController',
        ]);
    }
}
