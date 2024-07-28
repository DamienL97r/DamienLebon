<?php

namespace App\Controller\Admin;

use App\Entity\Categorie;
use App\Entity\CV;
use App\Entity\Experience;
use App\Entity\Hardskills;
use App\Entity\ProfileImage;
use App\Entity\Project;
use App\Entity\Softskills;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        return $this->render('admin/dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Damien Lebon');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::subMenu('A propos', 'fas fa-cog')->setSubItems([
            MenuItem::linkToCrud('Utilisateur', 'fas fa-cog', User::class),
            MenuItem::linkToCrud('CV', 'fas fa-cog', CV::class),
            MenuItem::linkToCrud('Photo', 'fas fa-cog', ProfileImage::class),
            MenuItem::linkToCrud('Hardskills', 'fas fa-comments', Hardskills::class),
            MenuItem::linkToCrud('Softskills', 'fas fa-comments', Softskills::class),
        ]);
        yield MenuItem::linkToCrud('Expériences', 'fas fa-newspaper', Experience::class);
        yield MenuItem::linkToCrud('Projets', 'fas fa-palette', Project::class);
        yield MenuItem::linkToCrud('Catégorie', 'fas fa-comments', Categorie::class);
    }
}
