// Mock inventory data with comprehensive product information
export interface ProductVariant {
  id: string;
  size?: string;
  color?: string;
  material?: string;
  weight?: string;
  quantity: number;
  sku: string;
}

export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  leadTime: string; // in days
  minimumOrderQuantity: number;
  preferredSupplier: boolean;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  basePrice: number;
  currentPrice: number;
  totalQuantity: number;
  category: string;
  subCategory: string;
  description: string;
  imageUrl: string;
  variants: ProductVariant[];
  supplier: Supplier;
  reorderThreshold: number;
  reorderQuantity: number;
  lastRestocked: string; // ISO date string
  costPrice: number;
  profitMargin: number;
  tags: string[];
  location: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Discontinued';
}

export const inventoryData: Product[] = [
  {
    id: "P001",
    name: "Premium Ergonomic Office Chair",
    sku: "FURN-CHAIR-001",
    basePrice: 299.99,
    currentPrice: 249.99,
    totalQuantity: 45,
    category: "Furniture",
    subCategory: "Office Chairs",
    description: "High-quality ergonomic office chair with adjustable lumbar support, height adjustment, and 360° swivel capability. Breathable mesh back and premium cushioned seat for all-day comfort.",
    imageUrl: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg",
    variants: [
      { id: "V001", color: "Black", quantity: 20, sku: "FURN-CHAIR-001-BLK" },
      { id: "V002", color: "Gray", quantity: 15, sku: "FURN-CHAIR-001-GRY" },
      { id: "V003", color: "Blue", quantity: 10, sku: "FURN-CHAIR-001-BLU" }
    ],
    supplier: {
      id: "S001",
      name: "ErgoFurnish Inc.",
      contactPerson: "Sarah Johnson",
      email: "sales@ergofurnish.com",
      phone: "555-123-4567",
      leadTime: "14-21",
      minimumOrderQuantity: 10,
      preferredSupplier: true
    },
    reorderThreshold: 15,
    reorderQuantity: 30,
    lastRestocked: "2023-09-15",
    costPrice: 175.00,
    profitMargin: 42.85,
    tags: ["ergonomic", "office", "chair", "furniture", "premium"],
    location: "Warehouse A, Aisle 3, Rack 2",
    status: "In Stock"
  },
  {
    id: "P002",
    name: "Ultra HD 4K Monitor 27\"",
    sku: "TECH-MON-002",
    basePrice: 399.99,
    currentPrice: 379.99,
    totalQuantity: 12,
    category: "Electronics",
    subCategory: "Monitors",
    description: "27-inch Ultra HD 4K monitor with IPS panel, 99% sRGB color accuracy, and anti-glare coating. Features multiple connectivity options including HDMI 2.1, DisplayPort 1.4, and USB-C.",
    imageUrl: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    variants: [
      { id: "V004", size: "27\"", quantity: 8, sku: "TECH-MON-002-27" },
      { id: "V005", size: "32\"", quantity: 4, sku: "TECH-MON-002-32" }
    ],
    supplier: {
      id: "S002",
      name: "TechVision Displays",
      contactPerson: "Michael Chen",
      email: "orders@techvision.com",
      phone: "555-987-6543",
      leadTime: "7-14",
      minimumOrderQuantity: 5,
      preferredSupplier: true
    },
    reorderThreshold: 10,
    reorderQuantity: 15,
    lastRestocked: "2023-10-02",
    costPrice: 280.00,
    profitMargin: 35.71,
    tags: ["monitor", "4K", "UHD", "display", "electronics"],
    location: "Warehouse B, Aisle 1, Rack 4",
    status: "Low Stock"
  },
  {
    id: "P003",
    name: "Wireless Noise-Cancelling Headphones",
    sku: "AUDIO-HEAD-003",
    basePrice: 249.99,
    currentPrice: 199.99,
    totalQuantity: 28,
    category: "Electronics",
    subCategory: "Audio",
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and comfortable over-ear design. Features Bluetooth 5.2, touch controls, and high-resolution audio certification.",
    imageUrl: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    variants: [
      { id: "V006", color: "Black", quantity: 15, sku: "AUDIO-HEAD-003-BLK" },
      { id: "V007", color: "White", quantity: 8, sku: "AUDIO-HEAD-003-WHT" },
      { id: "V008", color: "Rose Gold", quantity: 5, sku: "AUDIO-HEAD-003-RSG" }
    ],
    supplier: {
      id: "S003",
      name: "SoundWave Audio",
      contactPerson: "Jessica Lee",
      email: "wholesale@soundwave.com",
      phone: "555-456-7890",
      leadTime: "10-14",
      minimumOrderQuantity: 8,
      preferredSupplier: false
    },
    reorderThreshold: 12,
    reorderQuantity: 20,
    lastRestocked: "2023-09-28",
    costPrice: 135.00,
    profitMargin: 48.14,
    tags: ["headphones", "wireless", "noise-cancelling", "audio", "bluetooth"],
    location: "Warehouse A, Aisle 2, Rack 1",
    status: "In Stock"
  },
  {
    id: "P004",
    name: "Professional DSLR Camera Kit",
    sku: "PHOTO-CAM-004",
    basePrice: 1299.99,
    currentPrice: 1199.99,
    totalQuantity: 5,
    category: "Electronics",
    subCategory: "Photography",
    description: "Professional-grade DSLR camera with 24.2MP sensor, 4K video recording, and weather-sealed body. Includes 18-55mm lens, camera bag, extra battery, and 64GB SD card.",
    imageUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
    variants: [
      { id: "V009", color: "Black", quantity: 5, sku: "PHOTO-CAM-004-KIT" }
    ],
    supplier: {
      id: "S004",
      name: "ProPhoto Supplies",
      contactPerson: "David Wilson",
      email: "orders@prophotosupplies.com",
      phone: "555-789-0123",
      leadTime: "14-21",
      minimumOrderQuantity: 3,
      preferredSupplier: true
    },
    reorderThreshold: 5,
    reorderQuantity: 8,
    lastRestocked: "2023-08-20",
    costPrice: 950.00,
    profitMargin: 26.32,
    tags: ["camera", "DSLR", "photography", "professional", "kit"],
    location: "Warehouse B, Secure Cabinet 2",
    status: "Low Stock"
  },
  {
    id: "P005",
    name: "Adjustable Standing Desk",
    sku: "FURN-DESK-005",
    basePrice: 499.99,
    currentPrice: 449.99,
    totalQuantity: 18,
    category: "Furniture",
    subCategory: "Desks",
    description: "Electric height-adjustable standing desk with memory settings, anti-collision system, and sturdy steel frame. Spacious desktop made from sustainable bamboo with cable management system.",
    imageUrl: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg",
    variants: [
      { id: "V010", size: "48\"x30\"", color: "Natural", quantity: 7, sku: "FURN-DESK-005-48-NAT" },
      { id: "V011", size: "48\"x30\"", color: "Walnut", quantity: 5, sku: "FURN-DESK-005-48-WAL" },
      { id: "V012", size: "60\"x30\"", color: "Natural", quantity: 3, sku: "FURN-DESK-005-60-NAT" },
      { id: "V013", size: "60\"x30\"", color: "Walnut", quantity: 3, sku: "FURN-DESK-005-60-WAL" }
    ],
    supplier: {
      id: "S001",
      name: "ErgoFurnish Inc.",
      contactPerson: "Sarah Johnson",
      email: "sales@ergofurnish.com",
      phone: "555-123-4567",
      leadTime: "14-21",
      minimumOrderQuantity: 5,
      preferredSupplier: true
    },
    reorderThreshold: 10,
    reorderQuantity: 15,
    lastRestocked: "2023-09-10",
    costPrice: 320.00,
    profitMargin: 40.62,
    tags: ["desk", "standing desk", "adjustable", "furniture", "ergonomic"],
    location: "Warehouse A, Aisle 4, Rack 3",
    status: "In Stock"
  },
  {
    id: "P006",
    name: "Mechanical Gaming Keyboard",
    sku: "TECH-KEY-006",
    basePrice: 129.99,
    currentPrice: 99.99,
    totalQuantity: 32,
    category: "Electronics",
    subCategory: "Computer Peripherals",
    description: "RGB mechanical gaming keyboard with customizable per-key lighting, programmable macro keys, and durable Cherry MX switches rated for 50 million keystrokes. Includes detachable wrist rest.",
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    variants: [
      { id: "V014", color: "Black", material: "Cherry MX Red", quantity: 12, sku: "TECH-KEY-006-RED" },
      { id: "V015", color: "Black", material: "Cherry MX Blue", quantity: 10, sku: "TECH-KEY-006-BLU" },
      { id: "V016", color: "White", material: "Cherry MX Brown", quantity: 10, sku: "TECH-KEY-006-BRN" }
    ],
    supplier: {
      id: "S005",
      name: "GameTech Peripherals",
      contactPerson: "Alex Rodriguez",
      email: "wholesale@gametech.com",
      phone: "555-234-5678",
      leadTime: "7-10",
      minimumOrderQuantity: 10,
      preferredSupplier: true
    },
    reorderThreshold: 15,
    reorderQuantity: 25,
    lastRestocked: "2023-10-05",
    costPrice: 65.00,
    profitMargin: 53.84,
    tags: ["keyboard", "mechanical", "gaming", "RGB", "peripherals"],
    location: "Warehouse B, Aisle 2, Rack 3",
    status: "In Stock"
  },
  {
    id: "P007",
    name: "Wireless Charging Pad (15W)",
    sku: "TECH-CHRG-007",
    basePrice: 39.99,
    currentPrice: 29.99,
    totalQuantity: 50,
    category: "Electronics",
    subCategory: "Mobile Accessories",
    description: "Fast wireless charging pad with 15W output, compatible with all Qi-enabled devices. Features temperature control, foreign object detection, and non-slip surface. Includes USB-C cable.",
    imageUrl: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg",
    variants: [
      { id: "V017", color: "Black", quantity: 25, sku: "TECH-CHRG-007-BLK" },
      { id: "V018", color: "White", quantity: 25, sku: "TECH-CHRG-007-WHT" }
    ],
    supplier: {
      id: "S006",
      name: "MobileTech Accessories",
      contactPerson: "Linda Park",
      email: "orders@mobiletech.com",
      phone: "555-345-6789",
      leadTime: "5-7",
      minimumOrderQuantity: 20,
      preferredSupplier: false
    },
    reorderThreshold: 20,
    reorderQuantity: 50,
    lastRestocked: "2023-09-25",
    costPrice: 15.00,
    profitMargin: 99.93,
    tags: ["charger", "wireless", "mobile", "accessories", "Qi"],
    location: "Warehouse A, Aisle 1, Rack 4",
    status: "In Stock"
  },
  {
    id: "P008",
    name: "Smart Home Security Camera",
    sku: "SMART-CAM-008",
    basePrice: 149.99,
    currentPrice: 129.99,
    totalQuantity: 0,
    category: "Electronics",
    subCategory: "Smart Home",
    description: "Wireless security camera with 1080p HD video, night vision, motion detection, and two-way audio. Features cloud storage, local SD card backup, and integration with major smart home platforms.",
    imageUrl: "https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg",
    variants: [
      { id: "V019", color: "White", quantity: 0, sku: "SMART-CAM-008-WHT" }
    ],
    supplier: {
      id: "S007",
      name: "SmartLife Technologies",
      contactPerson: "Robert Kim",
      email: "sales@smartlifetech.com",
      phone: "555-456-7890",
      leadTime: "10-14",
      minimumOrderQuantity: 15,
      preferredSupplier: true
    },
    reorderThreshold: 10,
    reorderQuantity: 30,
    lastRestocked: "2023-08-15",
    costPrice: 85.00,
    profitMargin: 52.93,
    tags: ["camera", "security", "smart home", "wireless", "IoT"],
    location: "Warehouse B, Aisle 3, Rack 1",
    status: "Out of Stock"
  },
  {
    id: "P009",
    name: "Ergonomic Mesh Task Chair",
    sku: "FURN-CHAIR-009",
    basePrice: 199.99,
    currentPrice: 169.99,
    totalQuantity: 22,
    category: "Furniture",
    subCategory: "Office Chairs",
    description: "Mid-back mesh task chair with adjustable height, tilt tension, and flip-up arms. Features breathable mesh back, padded seat, and smooth-rolling casters suitable for all floor types.",
    imageUrl: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg",
    variants: [
      { id: "V020", color: "Black", quantity: 12, sku: "FURN-CHAIR-009-BLK" },
      { id: "V021", color: "Gray", quantity: 10, sku: "FURN-CHAIR-009-GRY" }
    ],
    supplier: {
      id: "S001",
      name: "ErgoFurnish Inc.",
      contactPerson: "Sarah Johnson",
      email: "sales@ergofurnish.com",
      phone: "555-123-4567",
      leadTime: "14-21",
      minimumOrderQuantity: 10,
      preferredSupplier: true
    },
    reorderThreshold: 15,
    reorderQuantity: 25,
    lastRestocked: "2023-09-20",
    costPrice: 110.00,
    profitMargin: 54.54,
    tags: ["chair", "office", "ergonomic", "mesh", "task chair"],
    location: "Warehouse A, Aisle 3, Rack 2",
    status: "In Stock"
  },
  {
    id: "P010",
    name: "Portable External SSD 1TB",
    sku: "TECH-SSD-010",
    basePrice: 179.99,
    currentPrice: 159.99,
    totalQuantity: 8,
    category: "Electronics",
    subCategory: "Storage",
    description: "Ultra-fast portable SSD with 1TB capacity, read speeds up to 1050MB/s, and write speeds up to 1000MB/s. Features USB 3.2 Gen 2 interface, shock-resistant design, and password protection.",
    imageUrl: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg",
    variants: [
      { id: "V022", size: "1TB", quantity: 5, sku: "TECH-SSD-010-1TB" },
      { id: "V023", size: "2TB", quantity: 3, sku: "TECH-SSD-010-2TB" }
    ],
    supplier: {
      id: "S008",
      name: "DataStore Solutions",
      contactPerson: "Thomas Brown",
      email: "orders@datastoresolutions.com",
      phone: "555-567-8901",
      leadTime: "7-10",
      minimumOrderQuantity: 5,
      preferredSupplier: false
    },
    reorderThreshold: 10,
    reorderQuantity: 15,
    lastRestocked: "2023-09-30",
    costPrice: 110.00,
    profitMargin: 45.45,
    tags: ["SSD", "storage", "portable", "external", "USB"],
    location: "Warehouse B, Secure Cabinet 1",
    status: "Low Stock"
  },
  {
    id: "P011",
    name: "Professional Art Tablet",
    sku: "TECH-TAB-011",
    basePrice: 349.99,
    currentPrice: 329.99,
    totalQuantity: 15,
    category: "Electronics",
    subCategory: "Drawing Tablets",
    description: "Professional drawing tablet with 10x6 inch active area, 8192 levels of pressure sensitivity, and tilt recognition. Includes wireless pen, customizable express keys, and multi-touch capability.",
    imageUrl: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
    variants: [
      { id: "V024", size: "Medium (10x6\")", quantity: 10, sku: "TECH-TAB-011-MED" },
      { id: "V025", size: "Large (16x10\")", quantity: 5, sku: "TECH-TAB-011-LRG" }
    ],
    supplier: {
      id: "S009",
      name: "CreativeTech Supplies",
      contactPerson: "Emma Garcia",
      email: "wholesale@creativetech.com",
      phone: "555-678-9012",
      leadTime: "10-14",
      minimumOrderQuantity: 5,
      preferredSupplier: true
    },
    reorderThreshold: 8,
    reorderQuantity: 12,
    lastRestocked: "2023-09-12",
    costPrice: 220.00,
    profitMargin: 50.00,
    tags: ["tablet", "drawing", "art", "digital", "professional"],
    location: "Warehouse B, Aisle 2, Rack 2",
    status: "In Stock"
  },
  {
    id: "P012",
    name: "Bluetooth Wireless Earbuds",
    sku: "AUDIO-EAR-012",
    basePrice: 129.99,
    currentPrice: 99.99,
    totalQuantity: 40,
    category: "Electronics",
    subCategory: "Audio",
    description: "True wireless earbuds with Bluetooth 5.2, active noise cancellation, and 8-hour battery life (28 hours with charging case). Features touch controls, IPX7 water resistance, and voice assistant support.",
    imageUrl: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
    variants: [
      { id: "V026", color: "Black", quantity: 20, sku: "AUDIO-EAR-012-BLK" },
      { id: "V027", color: "White", quantity: 15, sku: "AUDIO-EAR-012-WHT" },
      { id: "V028", color: "Blue", quantity: 5, sku: "AUDIO-EAR-012-BLU" }
    ],
    supplier: {
      id: "S003",
      name: "SoundWave Audio",
      contactPerson: "Jessica Lee",
      email: "wholesale@soundwave.com",
      phone: "555-456-7890",
      leadTime: "10-14",
      minimumOrderQuantity: 10,
      preferredSupplier: false
    },
    reorderThreshold: 15,
    reorderQuantity: 30,
    lastRestocked: "2023-10-01",
    costPrice: 60.00,
    profitMargin: 66.65,
    tags: ["earbuds", "wireless", "bluetooth", "audio", "noise cancellation"],
    location: "Warehouse A, Aisle 2, Rack 1",
    status: "In Stock"
  },
  {
    id: "P013",
    name: "Ergonomic Vertical Mouse",
    sku: "TECH-MOU-013",
    basePrice: 59.99,
    currentPrice: 49.99,
    totalQuantity: 25,
    category: "Electronics",
    subCategory: "Computer Peripherals",
    description: "Ergonomic vertical mouse designed to reduce wrist strain with 6 programmable buttons and adjustable DPI settings. Features wireless connectivity, rechargeable battery, and silent click technology.",
    imageUrl: "https://images.pexels.com/photos/5082584/pexels-photo-5082584.jpeg",
    variants: [
      { id: "V029", size: "Standard", quantity: 15, sku: "TECH-MOU-013-STD" },
      { id: "V030", size: "Small", quantity: 10, sku: "TECH-MOU-013-SML" }
    ],
    supplier: {
      id: "S005",
      name: "GameTech Peripherals",
      contactPerson: "Alex Rodriguez",
      email: "wholesale@gametech.com",
      phone: "555-234-5678",
      leadTime: "7-10",
      minimumOrderQuantity: 10,
      preferredSupplier: true
    },
    reorderThreshold: 12,
    reorderQuantity: 20,
    lastRestocked: "2023-09-18",
    costPrice: 28.00,
    profitMargin: 78.54,
    tags: ["mouse", "ergonomic", "vertical", "wireless", "peripherals"],
    location: "Warehouse B, Aisle 2, Rack 3",
    status: "In Stock"
  },
  {
    id: "P014",
    name: "Compact Air Purifier",
    sku: "HOME-AIR-014",
    basePrice: 149.99,
    currentPrice: 129.99,
    totalQuantity: 18,
    category: "Home & Kitchen",
    subCategory: "Air Quality",
    description: "Compact HEPA air purifier suitable for rooms up to 300 sq ft. Features 3-stage filtration, air quality sensor, auto mode, and ultra-quiet sleep mode. Removes 99.97% of airborne particles as small as 0.3 microns.",
    imageUrl: "https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg",
    variants: [
      { id: "V031", color: "White", quantity: 12, sku: "HOME-AIR-014-WHT" },
      { id: "V032", color: "Black", quantity: 6, sku: "HOME-AIR-014-BLK" }
    ],
    supplier: {
      id: "S010",
      name: "HomeLife Appliances",
      contactPerson: "Patricia Moore",
      email: "orders@homelifeappliances.com",
      phone: "555-789-0123",
      leadTime: "10-14",
      minimumOrderQuantity: 8,
      preferredSupplier: true
    },
    reorderThreshold: 10,
    reorderQuantity: 15,
    lastRestocked: "2023-09-22",
    costPrice: 85.00,
    profitMargin: 52.93,
    tags: ["air purifier", "HEPA", "home", "appliance", "air quality"],
    location: "Warehouse A, Aisle 5, Rack 2",
    status: "In Stock"
  },
  {
    id: "P015",
    name: "Adjustable Laptop Stand",
    sku: "OFFICE-STD-015",
    basePrice: 49.99,
    currentPrice: 39.99,
    totalQuantity: 35,
    category: "Office Supplies",
    subCategory: "Ergonomic Accessories",
    description: "Adjustable aluminum laptop stand with 6 height settings and 360° rotation. Folds flat for easy storage and transportation. Compatible with laptops from 10-17 inches.",
    imageUrl: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
    variants: [
      { id: "V033", color: "Silver", quantity: 20, sku: "OFFICE-STD-015-SLV" },
      { id: "V034", color: "Space Gray", quantity: 15, sku: "OFFICE-STD-015-GRY" }
    ],
    supplier: {
      id: "S011",
      name: "Office Ergonomics Ltd.",
      contactPerson: "James Wilson",
      email: "sales@officeergonomics.com",
      phone: "555-890-1234",
      leadTime: "5-7",
      minimumOrderQuantity: 15,
      preferredSupplier: false
    },
    reorderThreshold: 15,
    reorderQuantity: 30,
    lastRestocked: "2023-10-03",
    costPrice: 22.00,
    profitMargin: 81.77,
    tags: ["laptop stand", "adjustable", "ergonomic", "aluminum", "portable"],
    location: "Warehouse A, Aisle 1, Rack 3",
    status: "In Stock"
  },
  {
    id: "P016",
    name: "Smart Wi-Fi LED Light Bulbs (4-Pack)",
    sku: "SMART-LGT-016",
    basePrice: 59.99,
    currentPrice: 49.99,
    totalQuantity: 0,
    category: "Electronics",
    subCategory: "Smart Home",
    description: "Set of 4 dimmable smart LED bulbs with millions of colors and tunable white (2700K-6500K). Compatible with major voice assistants and controllable via smartphone app. No hub required.",
    imageUrl: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg",
    variants: [
      { id: "V035", size: "A19 E26", quantity: 0, sku: "SMART-LGT-016-A19" }
    ],
    supplier: {
      id: "S007",
      name: "SmartLife Technologies",
      contactPerson: "Robert Kim",
      email: "sales@smartlifetech.com",
      phone: "555-456-7890",
      leadTime: "10-14",
      minimumOrderQuantity: 12,
      preferredSupplier: true
    },
    reorderThreshold: 10,
    reorderQuantity: 24,
    lastRestocked: "2023-08-10",
    costPrice: 30.00,
    profitMargin: 66.63,
    tags: ["smart bulb", "LED", "lighting", "smart home", "Wi-Fi"],
    location: "Warehouse B, Aisle 3, Rack 1",
    status: "Out of Stock"
  },
  {
    id: "P017",
    name: "Waterproof Bluetooth Speaker",
    sku: "AUDIO-SPK-017",
    basePrice: 89.99,
    currentPrice: 79.99,
    totalQuantity: 22,
    category: "Electronics",
    subCategory: "Audio",
    description: "Portable waterproof Bluetooth speaker with 20W output, 24-hour battery life, and built-in microphone for calls. Features IPX7 waterproof rating, floating design, and customizable EQ via companion app.",
    imageUrl: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg",
    variants: [
      { id: "V036", color: "Black", quantity: 8, sku: "AUDIO-SPK-017-BLK" },
      { id: "V037", color: "Blue", quantity: 7, sku: "AUDIO-SPK-017-BLU" },
      { id: "V038", color: "Red", quantity: 7, sku: "AUDIO-SPK-017-RED" }
    ],
    supplier: {
      id: "S003",
      name: "SoundWave Audio",
      contactPerson: "Jessica Lee",
      email: "wholesale@soundwave.com",
      phone: "555-456-7890",
      leadTime: "10-14",
      minimumOrderQuantity: 8,
      preferredSupplier: false
    },
    reorderThreshold: 12,
    reorderQuantity: 18,
    lastRestocked: "2023-09-15",
    costPrice: 45.00,
    profitMargin: 77.76,
    tags: ["speaker", "bluetooth", "waterproof", "portable", "audio"],
    location: "Warehouse A, Aisle 2, Rack 1",
    status: "In Stock"
  },
  {
    id: "P018",
    name: "Dual Monitor Arm Mount",
    sku: "OFFICE-MNT-018",
    basePrice: 119.99,
    currentPrice: 99.99,
    totalQuantity: 14,
    category: "Office Supplies",
    subCategory: "Monitor Accessories",
    description: "Gas spring dual monitor arm mount supporting two monitors up to 32\" and 17.6 lbs each. Features full motion adjustment, cable management, and VESA compatibility (75x75mm, 100x100mm).",
    imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    variants: [
      { id: "V039", color: "Black", quantity: 10, sku: "OFFICE-MNT-018-BLK" },
      { id: "V040", color: "Silver", quantity: 4, sku: "OFFICE-MNT-018-SLV" }
    ],
    supplier: {
      id: "S011",
      name: "Office Ergonomics Ltd.",
      contactPerson: "James Wilson",
      email: "sales@officeergonomics.com",
      phone: "555-890-1234",
      leadTime: "5-7",
      minimumOrderQuantity: 5,
      preferredSupplier: false
    },
    reorderThreshold: 8,
    reorderQuantity: 12,
    lastRestocked: "2023-09-28",
    costPrice: 65.00,
    profitMargin: 53.83,
    tags: ["monitor arm", "dual monitor", "mount", "ergonomic", "VESA"],
    location: "Warehouse A, Aisle 1, Rack 2",
    status: "In Stock"
  },
  {
    id: "P019",
    name: "Wireless Gaming Mouse",
    sku: "TECH-MOU-019",
    basePrice: 99.99,
    currentPrice: 89.99,
    totalQuantity: 30,
    category: "Electronics",
    subCategory: "Computer Peripherals",
    description: "High-performance wireless gaming mouse with 25,000 DPI optical sensor, 10 programmable buttons, and RGB lighting. Features 70-hour battery life, ultra-lightweight design (69g), and onboard memory profiles.",
    imageUrl: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
    variants: [
      { id: "V041", color: "Black", quantity: 20, sku: "TECH-MOU-019-BLK" },
      { id: "V042", color: "White", quantity: 10, sku: "TECH-MOU-019-WHT" }
    ],
    supplier: {
      id: "S005",
      name: "GameTech Peripherals",
      contactPerson: "Alex Rodriguez",
      email: "wholesale@gametech.com",
      phone: "555-234-5678",
      leadTime: "7-10",
      minimumOrderQuantity: 10,
      preferredSupplier: true
    },
    reorderThreshold: 15,
    reorderQuantity: 25,
    lastRestocked: "2023-10-05",
    costPrice: 55.00,
    profitMargin: 63.62,
    tags: ["mouse", "gaming", "wireless", "RGB", "peripherals"],
    location: "Warehouse B, Aisle 2, Rack 3",
    status: "In Stock"
  },
  {
    id: "P020",
    name: "Compact Espresso Machine",
    sku: "HOME-COF-020",
    basePrice: 299.99,
    currentPrice: 279.99,
    totalQuantity: 8,
    category: "Home & Kitchen",
    subCategory: "Coffee Makers",
    description: "15-bar pump espresso machine with built-in grinder, milk frother, and programmable brewing options. Features compact design, removable water tank, and cup warming tray.",
    imageUrl: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg",
    variants: [
      { id: "V043", color: "Stainless Steel", quantity: 5, sku: "HOME-COF-020-SS" },
      { id: "V044", color: "Black", quantity: 3, sku: "HOME-COF-020-BLK" }
    ],
    supplier: {
      id: "S010",
      name: "HomeLife Appliances",
      contactPerson: "Patricia Moore",
      email: "orders@homelifeappliances.com",
      phone: "555-789-0123",
      leadTime: "10-14",
      minimumOrderQuantity: 5,
      preferredSupplier: true
    },
    reorderThreshold: 10,
    reorderQuantity: 12,
    lastRestocked: "2023-09-10",
    costPrice: 180.00,
    profitMargin: 55.55,
    tags: ["espresso", "coffee", "machine", "kitchen", "appliance"],
    location: "Warehouse A, Aisle 5, Rack 1",
    status: "Low Stock"
  }
];
