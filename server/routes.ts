import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertQuoteRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(data);
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
