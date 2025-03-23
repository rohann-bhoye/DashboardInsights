import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  
  // Get dashboard stats - total numbers
  app.get('/api/dashboard/stats', async (req, res) => {
    try {
      const totalSales = await storage.getTotalSales();
      const totalOrders = await storage.getTotalOrders();
      const productsSold = await storage.getTotalProductsSold();
      const newCustomers = await storage.getNewCustomers();
      
      res.json({
        totalSales,
        totalOrders,
        productsSold,
        newCustomers
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve dashboard stats' });
    }
  });

  // Get visitor insights data
  app.get('/api/dashboard/visitors', async (req, res) => {
    try {
      const visitors = await storage.getVisitorData();
      res.json(visitors);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve visitor data' });
    }
  });

  // Get revenue data
  app.get('/api/dashboard/revenue', async (req, res) => {
    try {
      const revenue = await storage.getRevenueData();
      res.json(revenue);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve revenue data' });
    }
  });

  // Get customer satisfaction data
  app.get('/api/dashboard/satisfaction', async (req, res) => {
    try {
      const satisfaction = await storage.getSatisfactionData();
      res.json(satisfaction);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve satisfaction data' });
    }
  });

  // Get target vs reality data
  app.get('/api/dashboard/target', async (req, res) => {
    try {
      const target = await storage.getTargetData();
      res.json(target);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve target data' });
    }
  });

  // Get top products data
  app.get('/api/dashboard/top-products', async (req, res) => {
    try {
      const products = await storage.getTopProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve top products data' });
    }
  });

  // Get volume vs service data
  app.get('/api/dashboard/volume', async (req, res) => {
    try {
      const volume = await storage.getVolumeData();
      res.json(volume);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve volume data' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
