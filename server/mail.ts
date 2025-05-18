import nodemailer from 'nodemailer';
import type { ContactSubmission, QuoteRequest } from '@shared/schema';
import { log } from './vite';

// Configuration du transporteur d'email
export const createTransporter = () => {
  // En production, utilisez des services SMTP réels ou des services comme SendGrid, etc.
  // Pour le développement, nous allons configurer un service SMTP basique
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    });

    return transporter;
  } catch (error) {
    log(`Erreur lors de la création du transporteur d'email: ${error}`, 'mail-service');
    return null;
  }
};

// Fonction pour envoyer un email de formulaire de contact
export const sendContactEmail = async (submission: ContactSubmission): Promise<boolean> => {
  const transporter = createTransporter();

  if (!transporter) {
    log('Transporteur d\'email non disponible', 'mail-service');
    return false;
  }
  
  try {
    const { name, email, phone, subject, message } = submission;
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@neftransit.net',
      to: process.env.EMAIL_TO || 'contact@neftransit.net',
      subject: `Nouveau message: ${subject}`,
      html: `
        <h1>Nouveau message de contact</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    log(`Email envoyé: ${info.messageId}`, 'mail-service');
    return true;
  } catch (error) {
    log(`Erreur lors de l'envoi de l'email: ${error}`, 'mail-service');
    return false;
  }
};

// Fonction pour envoyer un email de demande de devis
export const sendQuoteRequestEmail = async (request: QuoteRequest): Promise<boolean> => {
  const transporter = createTransporter();
  
  if (!transporter) {
    log('Transporteur d\'email non disponible', 'mail-service');
    return false;
  }
  
  try {
    const { name, email, phone, company, serviceType, details } = request;
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@neftransit.net',
      to: process.env.EMAIL_TO || 'contact@neftransit.net',
      subject: `Nouvelle demande de devis: ${serviceType}`,
      html: `
        <h1>Nouvelle demande de devis</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Entreprise:</strong> ${company || 'Non fourni'}</p>
        <p><strong>Type de service:</strong> ${serviceType}</p>
        <p><strong>Détails:</strong></p>
        <p>${details || 'Aucun détail fourni'}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    log(`Email envoyé: ${info.messageId}`, 'mail-service');
    return true;
  } catch (error) {
    log(`Erreur lors de l'envoi de l'email: ${error}`, 'mail-service');
    return false;
  }
};