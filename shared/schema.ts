import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Sales table
export const sales = pgTable("sales", {
  id: serial("id").primaryKey(),
  amount: integer("amount").notNull(),
  date: timestamp("date").notNull().defaultNow(),
  channel: text("channel").notNull(), // online/offline
});

// Orders table
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  totalAmount: integer("total_amount").notNull(),
  date: timestamp("date").notNull().defaultNow(),
  customerId: integer("customer_id"),
});

// Products table
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  sold: integer("sold").notNull().default(0),
  category: text("category"),
});

// Customers table
export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  isNew: boolean("is_new").notNull().default(true),
  date: timestamp("date").notNull().defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSaleSchema = createInsertSchema(sales).pick({
  amount: true,
  channel: true,
});

export const insertOrderSchema = createInsertSchema(orders).pick({
  totalAmount: true,
  customerId: true,
});

export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  price: true,
  category: true,
});

export const insertCustomerSchema = createInsertSchema(customers).pick({
  name: true,
  email: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertSale = z.infer<typeof insertSaleSchema>;
export type Sale = typeof sales.$inferSelect;

export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertCustomer = z.infer<typeof insertCustomerSchema>;
export type Customer = typeof customers.$inferSelect;
