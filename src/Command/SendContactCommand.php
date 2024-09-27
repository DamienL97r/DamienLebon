<?php

namespace App\Command;

use App\Repository\ContactRepository;
use App\Repository\UserRepository;
use App\Services\ContactService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
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
    private $userRepository;
    private $mailer;
    private $contactService;
    public function __construct(
        ContactRepository $contactRepository,
        MailerInterface $mailer,
        UserRepository $userRepository,
        ContactService $contactService
    )
    {
        $this->contactRepository = $contactRepository;
        $this->mailer = $mailer;
        $this->userRepository = $userRepository;
        $this->contactService = $contactService;
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Début de l\'exécution de la commande.');

        $toSend = $this->contactRepository->findBy(['isSend' => false]);
        $adress = new Address($this->userRepository->findDev()->getEmail(), $this->userRepository->findDev()->getFirstname() . ' ' . $this->userRepository->findDev()->getLastname());

        foreach ($toSend as $mail) {
            $email = (new Email())
                ->from($mail->getEmail())
                ->to($adress)
                ->subject('Nouveau message de ' . $mail->getFirstname() . ' ' . $mail->getLastname())
                ->text($mail->getMessage());

            $this->mailer->send($email);

            try {
                $this->mailer->send($email);
                $output->writeln('Email envoyé à ' . $adress->getAddress());
            } catch (\Exception $e) {
                $output->writeln('Erreur lors de l\'envoi de l\'email: ' . $e->getMessage());
            }

            $this->contactService->isSend($mail);
        }
        return Command::SUCCESS;
    }
}
