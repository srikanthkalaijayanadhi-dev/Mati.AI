export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface Store {
  id: string;
  slug: string;
  name: string;
  niche: string;
  tagline: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  products: Product[];
  views: number;
  sales: number;
}
