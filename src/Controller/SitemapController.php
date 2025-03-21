<?php

namespace App\Controller;

use App\Services\CategoryService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SitemapController extends AbstractController
{
    #[Route('/sitemap.xml', name: 'sitemap', format: 'xml')]
    public function index(
        Request $request,
        CategoryService $categoryService,
    ): Response {
        $hostname = $request->getSchemeAndHttpHost();

        $urls = [];

        $urls[] = ['loc' => $this->generateUrl('accueil')];
        $urls[] = ['loc' => $this->generateUrl('a_propos')];
        $urls[] = ['loc' => $this->generateUrl('experience')];
        $urls[] = ['loc' => $this->generateUrl('portfolio')];
        $urls[] = ['loc' => $this->generateUrl('contact')];

        foreach ($categoryService->getProjectCategory() as $category) {
            $urls[] = [
                'loc' => $this->generateUrl('category_detail', ['slug' => $category->getSlug()]),
                'lastmod' => $category->getUpdatedAt()->format('Y-m-d'),
            ];
        }

        $response = new Response(
            $this->renderView('sitemap/index.html.twig', [
                'urls' => $urls,
                'hostname' => $hostname,
            ]),
            200
        );

        $response->headers->set('Content-type', 'text/xml');

        return $response;
    }
}
