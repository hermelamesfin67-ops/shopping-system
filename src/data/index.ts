import gamepad from "@public/gamepad.svg";
import keyboard from "@public/keyboard.svg";
import monitor from "@public/monitor.svg";
import camera from "@public/camera.svg";
import car from "@public/car.svg";
import sportShoes from "@public/sport-shoes.svg";
import jacket from "@public/jacket.svg";

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
    image: gamepad,
    category: "Gaming",
    isNew: false,
  },
  {
    id: "ak900-keyboard",
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discountPercent: 35,
    rating: 4,
    reviewCount: 75,
    image: keyboard,
    category: "Computers",
    isNew: false,
  },
  {
    id: "ips-monitor",
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discountPercent: 30,
    rating: 5,
    reviewCount: 99,
    image: monitor,
    category: "Computers",
    isNew: false,
  },
  {
    id: "dsr-camera",
    name: "CANON EOS DSLR Camera",
    price: 360,
    originalPrice: 360,
    discountPercent: 0,
    rating: 5,
    reviewCount: 95,
    image: camera,
    category: "Camera",
    isNew: false,
  },
  {
    id: "electric-car",
    name: "Kids Electric Car",
    price: 960,
    originalPrice: 960,
    discountPercent: 0,
    rating: 5,
    reviewCount: 65,
    image: car,
    category: "Car",
    isNew: true,
  },
  {
    id: "soccer-cleats",
    name: "Jr. Zoom Soccer Cleats",
    price: 160,
    originalPrice: 160,
    discountPercent: 0,
    rating: 4,
    reviewCount: 50,
    image: sportShoes,
    category: "Shoes",
    isNew: true,
  },
  {
    id: "jacket",
    name: "Quilted Satin Jacket",
    price: 160,
    originalPrice: 160,
    discountPercent: 0,
    rating: 5,
    reviewCount: 40,
    image: jacket,
    category: "Jacket",
    isNew: true,
  },
];
