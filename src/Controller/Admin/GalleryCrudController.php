<?php

namespace App\Controller\Admin;

use App\Entity\Gallery;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class GalleryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Gallery::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('file')
                ->onlyOnIndex(),
            BooleanField::new('isVisible'),
            TextField::new('galleryFile')
                ->setFormType(VichImageType::class)
                ->hideOnIndex(),
            ImageField::new('file')
                ->setBasePath('/uploads/images/gallery_file/')
                ->onlyOnIndex(),
        ];
    }
}
