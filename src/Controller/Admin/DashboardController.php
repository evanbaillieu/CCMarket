<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\Langues;
use App\Entity\Project;
use App\Entity\Categories;
use App\Entity\Contributor;
use App\Entity\Experience;
use App\Entity\Favorite;
use App\Entity\Job;
use App\Entity\ProfilType;
use App\Entity\Source;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class DashboardController extends AbstractDashboardController
{

    public function __construct(private AdminUrlGenerator $adminUrlGenerator)
    {
    }

    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $url = $this->adminUrlGenerator
            ->setController(ProjectCrudController::class)
            ->generateUrl();
         return $this->redirect($url);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('CMarket Admin Dashboard');
    }

   public function configureMenuItems(): iterable
    {
        yield MenuItem::section('Users');
        yield MenuItem::subMenu('Actions', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Add User', 'fas fa-plus', User::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Users', 'fas fa-eye', User::class)
        ]);



        yield MenuItem::section('Projects');
        yield MenuItem::subMenu('Actions', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Add Project', 'fas fa-plus', Project::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Project', 'fas fa-eye', Project::class)
        ]);

        yield MenuItem::section('Jobs');
        yield MenuItem::subMenu('Actions', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Add Job', 'fas fa-plus', Job::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Jobs', 'fas fa-eye', Job::class)
        ]);

        yield MenuItem::section('Categories');
        yield MenuItem::subMenu('Actions', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Add Category', 'fas fa-plus', Categories::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Categories', 'fas fa-eye', Categories::class)
        ]);

        yield MenuItem::section('Experiences');
        yield MenuItem::subMenu('Actions', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Add Job', 'fas fa-plus', Experience::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Experiences', 'fas fa-eye', Experience::class)
        ]);

        yield MenuItem::section('Sources');
        yield MenuItem::subMenu('Actions', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Add Source', 'fas fa-plus', Source::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Sources', 'fas fa-eye', Source::class)
        ]);


        yield MenuItem::section('Profil Type');
        yield MenuItem::subMenu('Actions', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Add Profil Type', 'fas fa-plus', ProfilType::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Profil Type', 'fas fa-eye', ProfilType::class)
        ]);

        yield MenuItem::section('Langues');
        yield MenuItem::subMenu('Actions', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Add Langues', 'fas fa-plus', Langues::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Langues', 'fas fa-eye', Langues::class)
        ]);

    }
}
