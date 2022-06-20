<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220619223513 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE discussion (id INT AUTO_INCREMENT NOT NULL, blocked JSON NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE discussion_messaging (discussion_id INT NOT NULL, messaging_id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\', INDEX IDX_6D7367371ADED311 (discussion_id), INDEX IDX_6D7367375CA3C610 (messaging_id), PRIMARY KEY(discussion_id, messaging_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE participant (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE discussion_messaging ADD CONSTRAINT FK_6D7367371ADED311 FOREIGN KEY (discussion_id) REFERENCES discussion (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE discussion_messaging ADD CONSTRAINT FK_6D7367375CA3C610 FOREIGN KEY (messaging_id) REFERENCES messaging (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE message ADD discussion_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F1ADED311 FOREIGN KEY (discussion_id) REFERENCES discussion (id)');
        $this->addSql('CREATE INDEX IDX_B6BD307F1ADED311 ON message (discussion_id)');
        $this->addSql('ALTER TABLE messaging CHANGE id id BINARY(16) NOT NULL COMMENT \'(DC2Type:uuid)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE discussion_messaging DROP FOREIGN KEY FK_6D7367371ADED311');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307F1ADED311');
        $this->addSql('DROP TABLE discussion');
        $this->addSql('DROP TABLE discussion_messaging');
        $this->addSql('DROP TABLE participant');
        $this->addSql('DROP INDEX IDX_B6BD307F1ADED311 ON message');
        $this->addSql('ALTER TABLE message DROP discussion_id');
        $this->addSql('ALTER TABLE messaging CHANGE id id INT AUTO_INCREMENT NOT NULL');
    }
}
