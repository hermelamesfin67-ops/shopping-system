export const SIDEBAR_CATEGORIES = [
  { name: "Woman's Fashion", hasSub: true },
  { name: "Men's Fashion", hasSub: true },
  { name: "Electronics", hasSub: false },
  { name: "Home & Lifestyle", hasSub: false },
  { name: "Medicine", hasSub: false },
  { name: "Sports & Outdoor", hasSub: false },
  { name: "Baby's & Toys", hasSub: false },
  { name: "Groceries & Pets", hasSub: false },
  { name: "Health & Beauty", hasSub: false },
];

export const CATEGORIES: Category[] = [
  { id: "phones", name: "Phones", iconName: "Smartphone" },
  { id: "computers", name: "Computers", iconName: "Monitor" },
  { id: "smartwatch", name: "Smart Watch", iconName: "Watch" },
  { id: "camera", name: "Camera", iconName: "Camera" },
  { id: "headphones", name: "Head Phones", iconName: "Headphones" },
  { id: "gaming", name: "Gaming", iconName: "Gamepad2" },
];

export const PRODUCTS: Product[] = [
  {
    id: "havit-gamepad",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discountPercent: 40,
    rating: 5,
    reviewCount: 88,
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&auto=format&fit=crop&q=80",
    category: "Gaming",
    isNew: false,
    description:
      "Ergonomic dual-vibration feedback gaming controller with high precision thumbsticks and rapid trigger response.",
    inStock: true,
    colors: ["#DB4444", "#000000"],
    sizes: ["Standard"],
  },
  {
    id: "ak900-keyboard",
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discountPercent: 35,
    rating: 4,
    reviewCount: 75,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
    category: "Computers",
    isNew: false,
    description:
      "Mechanical RGB backlit gaming keyboard with tactile blue switches and durable aluminum alloy top plate.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: ["Tenkeyless", "Full Size"],
  },
  {
    id: "ips-monitor",
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discountPercent: 30,
    rating: 5,
    reviewCount: 99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
    category: "Computers",
    isNew: false,
    description:
      "165Hz Refresh Rate 1ms response time Curved IPS display with HDR support and AMD FreeSync Premium.",
    inStock: true,
    colors: ["#000000"],
    sizes: ["27 inch", "32 inch"],
  },
];
