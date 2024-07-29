<?php

namespace App\Controller;

use App\Services\CategoryService;
use App\Services\ProjectService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class PortfolioController extends AbstractController
{
    #[Route('/portfolio', name: 'portfolio')]
    public function index(
        ProjectService $projectService,
        CategoryService $categoryService
    ): Response {
        return $this->render('portfolio/index.html.twig', [
            'projects' => $projectService->getVisibleProjects(),
            'categories' => $categoryService->getProjectCategory(),
        ]);
    }
}
