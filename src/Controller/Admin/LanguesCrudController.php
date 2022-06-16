<?php

namespace App\Controller\Admin;

use App\Entity\Langues;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class LanguesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Langues::class;
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
