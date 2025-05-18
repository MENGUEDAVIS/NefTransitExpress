import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertQuoteRequestSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactEmail, sendQuoteRequestEmail } from "./mail";
import { log } from "./vite";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(data);
      
      // Envoyer l'email
      try {
        const emailSent = await sendContactEmail(submission);
        log(`Email envoyé: ${emailSent}`, "contact-route");
      } catch (emailError) {
        log(`Erreur d'envoi d'email: ${emailError}`, "contact-route");
        // Nous ne renvoyons pas l'erreur au client, mais nous la loggons pour le débogage
      }
      
      return res.status(201).json({ success: true, data: submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      return res.status(500).json({ 
        success: false, 
        message: "An unexpected error occurred" 
      });
    }
  });

  // Quote request submissions
  app.post("/api/quote", async (req, res) => {
    try {
      const data = insertQuoteRequestSchema.parse(req.body);
      const request = await storage.createQuoteRequest(data);
      
      // Envoyer l'email
      try {
        const emailSent = await sendQuoteRequestEmail(request);
        log(`Email de demande de devis envoyé: ${emailSent}`, "quote-route");
      } catch (emailError) {
        log(`Erreur d'envoi d'email de devis: ${emailError}`, "quote-route");
        // Nous ne renvoyons pas l'erreur au client, mais nous la loggons pour le débogage
      }
      
      return res.status(201).json({ success: true, data: request });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      return res.status(500).json({ 
        success: false, 
        message: "An unexpected error occurred" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
