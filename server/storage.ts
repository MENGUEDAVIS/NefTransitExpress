import { users, type User, type InsertUser, type InsertContactSubmission, type ContactSubmission, type InsertQuoteRequest, type QuoteRequest } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private quoteRequests: Map<number, QuoteRequest>;
  currentId: number;
  private contactId: number;
  private quoteId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.quoteRequests = new Map();
    this.currentId = 1;
    this.contactId = 1;
    this.quoteId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactId++;
    const createdAt = new Date();
    // Gestion explicite des champs pour s'assurer que null est utilisé pour les valeurs optionnelles manquantes
    const contactSubmission: ContactSubmission = { 
      id,
      name: submission.name,
      email: submission.email,
      phone: submission.phone || null,
      subject: submission.subject,
      message: submission.message,
      createdAt
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = this.quoteId++;
    const createdAt = new Date();
    // Gestion explicite des champs pour s'assurer que null est utilisé pour les valeurs optionnelles manquantes
    const quoteRequest: QuoteRequest = { 
      id,
      name: request.name,
      email: request.email,
      phone: request.phone || null,
      company: request.company || null,
      serviceType: request.serviceType,
      details: request.details || null,
      createdAt
    };
    this.quoteRequests.set(id, quoteRequest);
    return quoteRequest;
  }
}

export const storage = new MemStorage();
