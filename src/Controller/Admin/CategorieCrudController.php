<?php

namespace App\Controller\Admin;

use App\Entity\Categorie;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class CategorieCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Categorie::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title'),
            ChoiceField::new('tag')
                ->setChoices([
                    'Hardskill' => 'Hardskill',
                    'Projet' => 'Projet',
                ]),
            SlugField::new('slug')
                ->setTargetFieldName('title'),
            TextField::new('categorieFile')
                ->setFormType(VichFileType::class)
                ->hideOnIndex(),
            ImageField::new('image')
                ->setBasePath('/uploads/images/categorie_file/')
                ->onlyOnIndex(),
        ];
    }
}
