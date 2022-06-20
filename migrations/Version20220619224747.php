<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220619224747 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categories (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contributor (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', project_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', INDEX IDX_DA6F9793166D1F9C (project_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE discussion (id INT AUTO_INCREMENT NOT NULL, blocked JSON NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE discussion_messaging (discussion_id INT NOT NULL, messaging_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', INDEX IDX_6D7367371ADED311 (discussion_id), INDEX IDX_6D7367375CA3C610 (messaging_id), PRIMARY KEY(discussion_id, messaging_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE experience (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', user_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', title VARCHAR(255) NOT NULL, abstract VARCHAR(255) NOT NULL, start_date DATE NOT NULL, end_date DATE DEFAULT NULL, INDEX IDX_590C103A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE favorite (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', user_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', UNIQUE INDEX UNIQ_68C58ED9A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE favorite_project (favorite_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', project_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', INDEX IDX_72E77E80AA17481D (favorite_id), INDEX IDX_72E77E80166D1F9C (project_id), PRIMARY KEY(favorite_id, project_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE job (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', project_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', profil_type_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', title VARCHAR(255) NOT NULL, abstract VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, is_banned TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_FBD8E0F8166D1F9C (project_id), INDEX IDX_FBD8E0F8405843C2 (profil_type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE langues (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE langues_user (langues_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', user_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', INDEX IDX_96E7A42628EAE92 (langues_id), INDEX IDX_96E7A426A76ED395 (user_id), PRIMARY KEY(langues_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE message (id INT AUTO_INCREMENT NOT NULL, discussion_id INT DEFAULT NULL, content LONGTEXT NOT NULL, create_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_B6BD307F1ADED311 (discussion_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messaging (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', user_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', UNIQUE INDEX UNIQ_EE15BA61A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE participant (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE profil_type (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', leader_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', category_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', title VARCHAR(255) NOT NULL, abstract VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, nb_star INT DEFAULT NULL, is_banned TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_2FB3D0EE73154ED4 (leader_id), INDEX IDX_2FB3D0EE12469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE source (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', project_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', job_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', type VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, link VARCHAR(255) NOT NULL, INDEX IDX_5F8A7F73166D1F9C (project_id), INDEX IDX_5F8A7F73BE04EA9 (job_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', profil_type_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', contributor_id BINARY(16) DEFAULT NULL COMMENT \'(DC2Type:uuid)\', message_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(70) NOT NULL, date_of_birth DATE NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D649405843C2 (profil_type_id), INDEX IDX_8D93D6497A19A357 (contributor_id), INDEX IDX_8D93D649537A1329 (message_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contributor ADD CONSTRAINT FK_DA6F9793166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE discussion_messaging ADD CONSTRAINT FK_6D7367371ADED311 FOREIGN KEY (discussion_id) REFERENCES discussion (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE discussion_messaging ADD CONSTRAINT FK_6D7367375CA3C610 FOREIGN KEY (messaging_id) REFERENCES messaging (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE experience ADD CONSTRAINT FK_590C103A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE favorite ADD CONSTRAINT FK_68C58ED9A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE favorite_project ADD CONSTRAINT FK_72E77E80AA17481D FOREIGN KEY (favorite_id) REFERENCES favorite (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE favorite_project ADD CONSTRAINT FK_72E77E80166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE job ADD CONSTRAINT FK_FBD8E0F8166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE job ADD CONSTRAINT FK_FBD8E0F8405843C2 FOREIGN KEY (profil_type_id) REFERENCES profil_type (id)');
        $this->addSql('ALTER TABLE langues_user ADD CONSTRAINT FK_96E7A42628EAE92 FOREIGN KEY (langues_id) REFERENCES langues (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE langues_user ADD CONSTRAINT FK_96E7A426A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F1ADED311 FOREIGN KEY (discussion_id) REFERENCES discussion (id)');
        $this->addSql('ALTER TABLE messaging ADD CONSTRAINT FK_EE15BA61A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE project ADD CONSTRAINT FK_2FB3D0EE73154ED4 FOREIGN KEY (leader_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE project ADD CONSTRAINT FK_2FB3D0EE12469DE2 FOREIGN KEY (category_id) REFERENCES categories (id)');
        $this->addSql('ALTER TABLE source ADD CONSTRAINT FK_5F8A7F73166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE source ADD CONSTRAINT FK_5F8A7F73BE04EA9 FOREIGN KEY (job_id) REFERENCES job (id)');
        $this->addSql('ALTER TABLE `user` ADD CONSTRAINT FK_8D93D649405843C2 FOREIGN KEY (profil_type_id) REFERENCES profil_type (id)');
        $this->addSql('ALTER TABLE `user` ADD CONSTRAINT FK_8D93D6497A19A357 FOREIGN KEY (contributor_id) REFERENCES contributor (id)');
        $this->addSql('ALTER TABLE `user` ADD CONSTRAINT FK_8D93D649537A1329 FOREIGN KEY (message_id) REFERENCES message (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE project DROP FOREIGN KEY FK_2FB3D0EE12469DE2');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D6497A19A357');
        $this->addSql('ALTER TABLE discussion_messaging DROP FOREIGN KEY FK_6D7367371ADED311');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307F1ADED311');
        $this->addSql('ALTER TABLE favorite_project DROP FOREIGN KEY FK_72E77E80AA17481D');
        $this->addSql('ALTER TABLE source DROP FOREIGN KEY FK_5F8A7F73BE04EA9');
        $this->addSql('ALTER TABLE langues_user DROP FOREIGN KEY FK_96E7A42628EAE92');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649537A1329');
        $this->addSql('ALTER TABLE discussion_messaging DROP FOREIGN KEY FK_6D7367375CA3C610');
        $this->addSql('ALTER TABLE job DROP FOREIGN KEY FK_FBD8E0F8405843C2');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649405843C2');
        $this->addSql('ALTER TABLE contributor DROP FOREIGN KEY FK_DA6F9793166D1F9C');
        $this->addSql('ALTER TABLE favorite_project DROP FOREIGN KEY FK_72E77E80166D1F9C');
        $this->addSql('ALTER TABLE job DROP FOREIGN KEY FK_FBD8E0F8166D1F9C');
        $this->addSql('ALTER TABLE source DROP FOREIGN KEY FK_5F8A7F73166D1F9C');
        $this->addSql('ALTER TABLE experience DROP FOREIGN KEY FK_590C103A76ED395');
        $this->addSql('ALTER TABLE favorite DROP FOREIGN KEY FK_68C58ED9A76ED395');
        $this->addSql('ALTER TABLE langues_user DROP FOREIGN KEY FK_96E7A426A76ED395');
        $this->addSql('ALTER TABLE messaging DROP FOREIGN KEY FK_EE15BA61A76ED395');
        $this->addSql('ALTER TABLE project DROP FOREIGN KEY FK_2FB3D0EE73154ED4');
        $this->addSql('DROP TABLE categories');
        $this->addSql('DROP TABLE contributor');
        $this->addSql('DROP TABLE discussion');
        $this->addSql('DROP TABLE discussion_messaging');
        $this->addSql('DROP TABLE experience');
        $this->addSql('DROP TABLE favorite');
        $this->addSql('DROP TABLE favorite_project');
        $this->addSql('DROP TABLE job');
        $this->addSql('DROP TABLE langues');
        $this->addSql('DROP TABLE langues_user');
        $this->addSql('DROP TABLE message');
        $this->addSql('DROP TABLE messaging');
        $this->addSql('DROP TABLE participant');
        $this->addSql('DROP TABLE profil_type');
        $this->addSql('DROP TABLE project');
        $this->addSql('DROP TABLE source');
        $this->addSql('DROP TABLE `user`');
    }
}
