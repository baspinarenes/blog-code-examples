import axios from "axios";

const API_URL = "https://dummyjson.com";

export async function get(apiUrl: string): Promise<any> {
  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    return null;
  }
}

export function getProduct(productId: number): Promise<any> {
  return get(`${API_URL}/products/${productId}`);
}

export function getUser(userId: number): Promise<any> {
  return get(`${API_URL}/users/${userId}`);
}
