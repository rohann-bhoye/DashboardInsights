import { 
  User, 
  InsertUser, 
  Sale, 
  InsertSale, 
  Order, 
  InsertOrder,
  Product,
  InsertProduct,
  Customer,
  InsertCustomer
} from "@shared/schema";

// Interface with methods for dashboard data
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Dashboard operations
  getTotalSales(): Promise<number>;
  getTotalOrders(): Promise<number>;
  getTotalProductsSold(): Promise<number>;
  getNewCustomers(): Promise<number>;
  getVisitorData(): Promise<any[]>;
  getRevenueData(): Promise<any[]>;
  getSatisfactionData(): Promise<any[]>;
  getTargetData(): Promise<any[]>;
  getTopProducts(): Promise<any[]>;
  getVolumeData(): Promise<any[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private sales: Map<number, Sale>;
  private orders: Map<number, Order>;
  private products: Map<number, Product>;
  private customers: Map<number, Customer>;
  
  // Track current IDs
  private userCurrentId: number;
  private saleCurrentId: number;
  private orderCurrentId: number;
  private productCurrentId: number;
  private customerCurrentId: number;

  constructor() {
    this.users = new Map();
    this.sales = new Map();
    this.orders = new Map();
    this.products = new Map();
    this.customers = new Map();
    
    this.userCurrentId = 1;
    this.saleCurrentId = 1;
    this.orderCurrentId = 1;
    this.productCurrentId = 1;
    this.customerCurrentId = 1;
    
    // Initialize with mock data
    this.initMockData();
  }

  private initMockData() {
    // Add mock products
    const products = [
      { name: "Home Decor Range", price: 12500, sold: 45, category: "Home" },
      { name: "Disney Princess Pink Bag M", price: 9900, sold: 37, category: "Fashion" },
      { name: "Bathroom Essentials", price: 7500, sold: 28, category: "Home" },
      { name: "Apple Smartwatches", price: 29900, sold: 15, category: "Electronics" }
    ];
    
    products.forEach(product => {
      this.products.set(this.productCurrentId, {
        id: this.productCurrentId,
        ...product
      });
      this.productCurrentId++;
    });
    
    // Add mock sales data
    const salesData = [
      { amount: 1000, channel: "online", date: new Date('2023-09-01') },
      { amount: 500, channel: "offline", date: new Date('2023-09-02') },
      { amount: 750, channel: "online", date: new Date('2023-09-03') },
      { amount: 1250, channel: "online", date: new Date('2023-09-04') },
      { amount: 900, channel: "offline", date: new Date('2023-09-05') }
    ];
    
    salesData.forEach(sale => {
      this.sales.set(this.saleCurrentId, {
        id: this.saleCurrentId,
        ...sale
      });
      this.saleCurrentId++;
    });
    
    // Add mock orders
    for (let i = 0; i < 300; i++) {
      this.orders.set(this.orderCurrentId, {
        id: this.orderCurrentId,
        totalAmount: Math.floor(Math.random() * 10000) + 1000,
        date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
        customerId: Math.floor(Math.random() * 20) + 1
      });
      this.orderCurrentId++;
    }
    
    // Add mock customers
    for (let i = 0; i < 20; i++) {
      const isNew = i < 8; // First 8 customers marked as new
      this.customers.set(this.customerCurrentId, {
        id: this.customerCurrentId,
        name: `Customer ${this.customerCurrentId}`,
        email: `customer${this.customerCurrentId}@example.com`,
        isNew,
        date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
      });
      this.customerCurrentId++;
    }
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Dashboard operations
  async getTotalSales(): Promise<number> {
    // Sum up all sales amounts
    let total = 0;
    this.sales.forEach(sale => {
      total += sale.amount;
    });
    return total;
  }
  
  async getTotalOrders(): Promise<number> {
    return this.orders.size;
  }
  
  async getTotalProductsSold(): Promise<number> {
    // For simplicity, returning the static number 5 as shown in the design
    return 5;
  }
  
  async getNewCustomers(): Promise<number> {
    // Count customers marked as new
    let count = 0;
    this.customers.forEach(customer => {
      if (customer.isNew) {
        count++;
      }
    });
    return count;
  }
  
  async getVisitorData(): Promise<any[]> {
    // Return mocked visitor data matching the chart in the design
    return [
      { name: 'Jan', local: 45, new: 30, unique: 50 },
      { name: 'Feb', local: 52, new: 40, unique: 55 },
      { name: 'Mar', local: 38, new: 45, unique: 35 },
      { name: 'Apr', local: 45, new: 50, unique: 40 },
      { name: 'May', local: 19, new: 55, unique: 45 },
      { name: 'Jun', local: 53, new: 40, unique: 30 },
      { name: 'Jul', local: 60, new: 35, unique: 45 },
      { name: 'Aug', local: 55, new: 50, unique: 55 },
      { name: 'Sep', local: 45, new: 58, unique: 40 },
      { name: 'Oct', local: 60, new: 62, unique: 45 },
      { name: 'Nov', local: 50, new: 65, unique: 55 },
      { name: 'Dec', local: 65, new: 60, unique: 50 }
    ];
  }
  
  async getRevenueData(): Promise<any[]> {
    // Return mocked revenue data matching the chart in the design
    return [
      { name: 'Mon', online: 65, offline: 30 },
      { name: 'Tue', online: 85, offline: 40 },
      { name: 'Wed', online: 35, offline: 60 },
      { name: 'Thu', online: 81, offline: 35 },
      { name: 'Fri', online: 56, offline: 60 },
      { name: 'Sat', online: 55, offline: 25 },
      { name: 'Sun', online: 80, offline: 70 }
    ];
  }
  
  async getSatisfactionData(): Promise<any[]> {
    // Return mocked satisfaction data matching the chart in the design
    return [
      { name: 'Jan', satisfaction: 65 },
      { name: 'Feb', satisfaction: 69 },
      { name: 'Mar', satisfaction: 62 },
      { name: 'Apr', satisfaction: 75 },
      { name: 'May', satisfaction: 68 },
      { name: 'Jun', satisfaction: 63 },
      { name: 'Jul', satisfaction: 80 },
      { name: 'Aug', satisfaction: 75 },
      { name: 'Sep', satisfaction: 85 }
    ];
  }
  
  async getTargetData(): Promise<any[]> {
    // Return mocked target vs reality data matching the chart in the design
    return [
      { name: 'Jan', target: 12, reality: 10 },
      { name: 'Feb', target: 15, reality: 13 },
      { name: 'Mar', target: 18, reality: 16 },
      { name: 'Apr', target: 14, reality: 12 },
      { name: 'May', target: 16, reality: 15 },
      { name: 'Jun', target: 19, reality: 17 },
      { name: 'Jul', target: 22, reality: 19 },
      { name: 'Aug', target: 20, reality: 17 }
    ];
  }
  
  async getTopProducts(): Promise<any[]> {
    // Return top products with percentages
    return [
      { name: 'Home Decor Range', percentage: 24, color: '#10B981' },
      { name: 'Disney Princess Pink Bag M', percentage: 28, color: '#10B981' },
      { name: 'Bathroom Essentials', percentage: 16, color: '#8B5CF6' },
      { name: 'Apple Smartwatches', percentage: 25, color: '#F59E0B' }
    ];
  }
  
  async getVolumeData(): Promise<any[]> {
    // Return mocked volume vs service data matching the chart in the design
    return [
      { name: 'Product A', volume: 1250, service: 970 },
      { name: 'Product B', volume: 815, service: 650 },
      { name: 'Product C', volume: 1070, service: 800 },
      { name: 'Product D', volume: 681, service: 510 },
      { name: 'Product E', volume: 1340, service: 1020 }
    ];
  }
}

export const storage = new MemStorage();
