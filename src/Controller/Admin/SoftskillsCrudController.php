<?php

namespace App\Controller\Admin;

use App\Entity\Softskills;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class SoftskillsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Softskills::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
        ];
    }
}
