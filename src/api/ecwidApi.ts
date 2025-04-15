import type { Product } from '../types/product';
import type { Category } from '../types/category';
import type { ApiResponse } from '../types/api';

const STORE_ID = '108362264';
const TOKEN = 'public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs';

const BASE_URL = `https://app.ecwid.com/api/v3/${STORE_ID}`;
const headers = {
  Authorization: `Bearer ${TOKEN}`,
};

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/categories`, { headers });
  const data: ApiResponse<Category> = await response.json();
  return data.items;
}

export async function getCategoryById(id: number): Promise<Category | null> {
  const response = await fetch(`${BASE_URL}/categories/${id}`, { headers });
  if (!response.ok) return null;
  return await response.json();
}

export async function getProducts(categoryId: number | null): Promise<Product[]> {
  try {
    const url = categoryId
      ? `${BASE_URL}/products?category=${categoryId}`
      : `${BASE_URL}/products`; // No category, fetch all products
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      throw new Error('Error fetching products');
    }

    const data: ApiResponse<Product> = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  const response = await fetch(`${BASE_URL}/products/${id}`, { headers });
  if (!response.ok) return null;
  return await response.json();
}

export async function getProductsByCategory(categoryId: number): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products?category=${categoryId}`, { headers });
  const data: ApiResponse<Product> = await response.json();
  return data.items;
}
