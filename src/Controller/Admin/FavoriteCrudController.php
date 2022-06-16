<?php

namespace App\Controller\Admin;

use App\Entity\Favorite;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class FavoriteCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Favorite::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
