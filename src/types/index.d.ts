interface Category {
  id: string;
  name: string;
  imageicon: string;
  created_at: Date;
  updated_at: Date;
}

interface Product {
  stock: number;
  is_available: false;
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  created_at: Date;
  updated_at: Date;
  // originalPrice?: number;
  // discountPercent?: number;
  // rating: number;
  // reviewCount: number;
  // isNew?: boolean;
  // description?: string;
  // inStock?: boolean;
  // colors?: string[];
  // sizes?: string[];
}
