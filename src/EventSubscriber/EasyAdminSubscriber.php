<?php

namespace App\EventSubscriber;

use App\Entity\CV;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            BeforeEntityPersistedEvent::class => [
                ['setUser', 10],
            ],
        ];
    }

    // CV
    public function setUser(BeforeEntityPersistedEvent $event)
    {
        $entity = $event->getEntityInstance();

        if (!($entity instanceof CV)) {
            return;
        }

        if (null === $entity->getUser()) {
            $user = $this->security->getUser();
            $entity->setUser($user);
        }
    }
}