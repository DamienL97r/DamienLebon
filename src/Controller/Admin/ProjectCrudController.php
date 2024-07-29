<?php

namespace App\Controller\Admin;

use App\Entity\Project;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class ProjectCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Project::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title'),
            SlugField::new('slug')
                ->setTargetFieldName('title'),
            TextEditorField::new('description'),
            BooleanField::new('portfolio')
                ->hideOnIndex(),
            TextField::new('link')
                ->hideOnIndex(),
            AssociationField::new('category'),
            DateField::new('createdAt'),
            TextField::new('projectFile')
                ->setFormType(VichFileType::class)
                ->hideOnIndex(),
            ImageField::new('file')
                ->setBasePath('/uploads/images/project_file/')
                ->onlyOnIndex(),
        ];
    }
}
