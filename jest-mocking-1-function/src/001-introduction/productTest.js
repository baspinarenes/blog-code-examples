import axios from "axios";
import { getProduct, mapProduct } from "./productApi.js";

axios.get = async () => {
  return {
    data: {
      id: 999,
      title: "Fake iPhone 11",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 99.99,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: ["https://dummyjson.com/image/i/products/1/1.jpg"],
    },
  };
};

async function test() {
  const product = await getProduct(3);
  const mappedProduct = mapProduct(product);

  if (!mappedProduct.hotDeal) {
    throw new Error("mapProduct method works incorrectly. take a look at the code.");
  } else {
    console.log("mapProduct method works correctly.");
  }
}

test();
