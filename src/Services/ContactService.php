<?php

namespace App\Services;

use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;

readonly class ContactService
{
    public function __construct(
        private EntityManagerInterface $manager
    ) {
    }

    public function isSend(Contact $contact): void
    {
        $contact->setSend(true);

        $this->manager->persist($contact);
        $this->manager->flush();
    }
}
