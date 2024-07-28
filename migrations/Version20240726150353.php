<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240726150353 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE softskills ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE softskills ADD CONSTRAINT FK_177EF24FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_177EF24FA76ED395 ON softskills (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE softskills DROP FOREIGN KEY FK_177EF24FA76ED395');
        $this->addSql('DROP INDEX IDX_177EF24FA76ED395 ON softskills');
        $this->addSql('ALTER TABLE softskills DROP user_id');
    }
}
