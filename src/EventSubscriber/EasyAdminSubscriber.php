<?php

namespace App\EventSubscriber;

use App\Entity\CV;
use App\Entity\Experience;
use App\Entity\ProfileImage;
use App\Entity\Softskills;
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
                ['setSoftskillsUser', 10],
                ['setExperienceUser', 10],
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

    // SoftSkills
    public function setSoftskillsUser(BeforeEntityPersistedEvent $event)
    {
        $entity = $event->getEntityInstance();

        if (!($entity instanceof Softskills)) {
            return;
        }

        if (null === $entity->getUser()) {
            $user = $this->security->getUser();
            $entity->setUser($user);
        }
    }

    // Experiences
    public function setExperienceUser(BeforeEntityPersistedEvent $event)
    {
        $entity = $event->getEntityInstance();

        if (!($entity instanceof Experience)) {
            return;
        }

        if (null === $entity->getUser()) {
            $user = $this->security->getUser();
            $entity->setUser($user);
        }
    }
}
