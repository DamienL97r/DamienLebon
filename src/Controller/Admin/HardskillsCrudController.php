<?php

namespace App\Controller\Admin;

use App\Entity\Hardskills;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class HardskillsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Hardskills::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title'),
            AssociationField::new('categorie'),
            TextField::new('hardSkillsFile')
                ->setFormType(VichFileType::class)
                ->hideOnIndex(),
            ImageField::new('image')
                ->setBasePath('/uploads/images/hardskills_file/')
                ->onlyOnIndex(),
        ];
    }
}
