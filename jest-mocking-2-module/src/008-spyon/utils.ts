import get from "./get";

const API_URL = "https://dummyjson.com";

export function getProduct(productId: number): Promise<any> {
  return get(`${API_URL}/products/${productId}`);
}

export function getUser(userId: number): Promise<any> {
  return get(`${API_URL}/users/${userId}`);
}
