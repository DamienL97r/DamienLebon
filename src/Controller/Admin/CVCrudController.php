<?php

namespace App\Controller\Admin;

use App\Entity\CV;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class CVCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return CV::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('cvFile')
                ->setFormType(VichFileType::class)
                ->hideOnIndex(),
            TextField::new('name')
                ->onlyOnIndex(),
            ImageField::new('name')
                ->setBasePath('/uploads/images/cv_file/')
                ->onlyOnIndex(),
        ];
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->disable(Action::DELETE, Action::NEW);
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Paramètres')
            ->setPageTitle('edit', 'Editer les paramètres');
    }
}
