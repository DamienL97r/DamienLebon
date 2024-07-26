<?php

namespace App\EventSubscriber;

use App\Entity\CV;
use App\Entity\ProfileImage;
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
                ['setCVUser', 10],
                ['setProfileImageUser', 10],
            ],
        ];
    }

    // CV
    public function setCVUser(BeforeEntityPersistedEvent $event)
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

    // ProfileImage
    public function setProfileImageUser(BeforeEntityPersistedEvent $event)
    {
        $entity = $event->getEntityInstance();

        if (!($entity instanceof ProfileImage)) {
            return;
        }

        if (null === $entity->getUser()) {
            $user = $this->security->getUser();
            $entity->setUser($user);
        }
    }
}