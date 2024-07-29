<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240729124035 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categorie_project DROP FOREIGN KEY FK_70307E4C166D1F9C');
        $this->addSql('ALTER TABLE categorie_project DROP FOREIGN KEY FK_70307E4CBCF5E72D');
        $this->addSql('DROP TABLE categorie_project');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie_project (categorie_id INT NOT NULL, project_id INT NOT NULL, INDEX IDX_70307E4C166D1F9C (project_id), INDEX IDX_70307E4CBCF5E72D (categorie_id), PRIMARY KEY(categorie_id, project_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE categorie_project ADD CONSTRAINT FK_70307E4C166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE categorie_project ADD CONSTRAINT FK_70307E4CBCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON UPDATE NO ACTION ON DELETE CASCADE');
    }
}
