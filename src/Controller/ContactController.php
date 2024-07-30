<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function index(
        Request $request,
        EntityManagerInterface $entityManager
    ): Response {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);

        $form->handleRequest($request);

        // Vérifiez d'abord si le formulaire a été soumis
        if ($form->isSubmitted() && $form->isValid()) {
            $contact = $form->getData();

            $contact->setCreatedAt(new \DateTime('now'));
            $entityManager->persist($contact);
            $entityManager->flush();

            $this->addFlash(
                'success',
                'Votre message a été envoyé avec succès !'
            );

            // Rediriger ou afficher un message de succès
            return $this->redirectToRoute('contact');
        }

        return $this->render('contact/contact.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
