# DamienLebon

DamienLebon un site web présentant mon portfolio et mes expériences professionnelles Test

## Dependencies
```bash
composer require friendsofphp/php-cs-fixer --dev
composer require --dev orm-fixtures
composer require fakerphp/faker
composer require symfony/webpack-encore-bundle
composer require easycorp/easyadmin-bundle
composer require vich/uploader-bundle
composer require liip/imagine-bundle
composer require symfony/twig-pack
```

## Création BDD du projet

```bash
symfony console doctrine:database:create
```

## Installation du projet

```bash
composer install
npm install
npm run build / watch
symfony serve
```

## Lancer php-cs-fixer
```bash
composer phpcs
```

## Charger les fixtures
```bash
symfony console doctrine:fixtures:load
```