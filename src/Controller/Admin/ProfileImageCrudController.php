<?php

namespace App\Controller\Admin;

use App\Entity\ProfileImage;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class ProfileImageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ProfileImage::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('profileImageFile')
                ->setFormType(VichFileType::class)
                ->hideOnIndex(),
            TextField::new('name')
                ->onlyOnIndex(),
            ImageField::new('name')
                ->setBasePath('/uploads/images/profile_image/')
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
