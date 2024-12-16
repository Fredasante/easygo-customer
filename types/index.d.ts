export interface ApiResponse<T> {
  message: string;
  code: string;
  data: T;
}

export interface Product {
  id: number;
  title: string;
  discount?: string;
  price: string;
  oldPrice: string;
  rating: number;
  sold: number;
  image: string;
}
