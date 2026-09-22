interface Category {
  id: string;
  name: string;
  iconName: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  isNew?: boolean;
  description?: string;
  inStock?: boolean;
  colors?: string[];
  sizes?: string[];
}