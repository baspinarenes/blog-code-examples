import axios from "axios";

async function getProduct(productId) {
  const response = await axios.get(`https://dummyjson.com/products/${productId}`);

  return response.data;
}

function mapProduct(data) {
  const mappedData = { ...data };

  mappedData.hotDeal = data.discountPercentage > 80;
  mappedData.isRunningOut = data.stock < 5;

  return mappedData;
}

export { getProduct, mapProduct };
