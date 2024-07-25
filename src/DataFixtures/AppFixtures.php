<?php

namespace App\DataFixtures;

use App\Entity\Categorie;
use App\Entity\Experience;
use App\Entity\Project;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{
    private const NB_EXPERIENCE = 5;
    private const NB_PROJECT = 5;
    private const NB_CATEGORY = 3;
    private const BATCH_SIZE = 20;

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        $user = new User();
        $user->setEmail('user@admin.com')
            ->setFirstname($faker->firstName())
            ->setLastname($faker->lastName())
            ->setPhoneNumber($faker->phoneNumber())
            ->setDescription($faker->text(150))
            ->setDateOfBirth($faker->dateTimeBetween('-6 month', 'now'))
            ->setLocation('Lyon, France')
            ->setGithub('Github')
            ->setLinkedin('Linkedin')
            ->setRoles(['ROLE_ADMIN'])
            ->setProfileImage('photo.png')
            ->setCv('cv.pdf')
            ->setPassword('$2y$13$Ub9L7e.BCpEe36vQKnURwukWXTY5O0d3/H///iIgdUGp7aMv6.khK'); // mdp = user

        $manager->persist($user);
        $batchCount = 0;

        for ($i = 0; $i < self::NB_CATEGORY; ++$i) {
            $category = new Categorie();
            $category->setTitle($faker->text(20))
                     ->setSlug($faker->slug);

            $manager->persist($category);
            ++$batchCount;

            for ($j = 0; $j < self::NB_PROJECT; ++$j) {
                $project = new Project();
                $project->setTitle($faker->text(20))
                      ->setCreatedAt($faker->dateTimeBetween('-6 month', 'now'))
                      ->setDescription($faker->realTextBetween(10, 50))
                      ->setPortfolio($faker->boolean(80))
                      ->setSlug($faker->slug)
                      ->addCategory($category)
                      ->setFile('placeholder.jpg')
                      ->setLink('linkProject')
                      ->setUser($user);

                $manager->persist($project);
                ++$batchCount;

                if (0 === $batchCount % self::BATCH_SIZE) {
                    $manager->flush();
                    $manager->clear(); // Clear the EntityManager to free memory
                }
            }
        }

        for ($i = 0; $i < self::NB_EXPERIENCE; ++$i) {
            $experience = new Experience();
            $experience->setTitle($faker->text(20))
                     ->setSlug($faker->slug)
                     ->setDescription($faker->realTextBetween(10, 50))
                     ->setDateStart($faker->dateTimeBetween('-6 month', '-5 month'))
                     ->setDateEnd($faker->dateTimeBetween('-5 month', 'now'))
                     ->setFile('placeholder.jpg')
                     ->setUser($user);

            $manager->persist($experience);
        }

        $manager->flush();
    }
}
