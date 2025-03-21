<?php

namespace App\Command;

use App\Repository\ContactRepository;
use App\Services\ContactService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;

#[AsCommand(
    name: 'app:send-contact',
    description: 'check if messages are sent and send them if they are not send',
)]
class SendContactCommand extends Command
{
    private $contactRepository;
    private $mailer;
    private $contactService;

    public function __construct(
        #[Autowire('%admin_email%')] private string $adminEmail,
        ContactRepository $contactRepository,
        MailerInterface $mailer,
        ContactService $contactService,
    ) {
        $this->contactRepository = $contactRepository;
        $this->mailer = $mailer;
        $this->contactService = $contactService;
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Début de l\'exécution de la commande.');

        $toSend = $this->contactRepository->findBy(['isSend' => false]);
        $adress = new Address($this->adminEmail);

        foreach ($toSend as $mail) {
            $email = (new Email())
                ->from($mail->getEmail())
                ->to($adress)
                ->subject('Nouveau message de '.$mail->getFirstname().' '.$mail->getLastname())
                ->text($mail->getMessage());

            $this->mailer->send($email);

            try {
                $output->writeln('Email envoyé à '.$adress->getAddress());
            } catch (\Exception $e) {
                $output->writeln('Erreur lors de l\'envoi de l\'email: '.$e->getMessage());
            }

            $this->contactService->isSend($mail);
        }

        return Command::SUCCESS;
    }
}
